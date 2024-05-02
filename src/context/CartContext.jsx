import { createContext, useEffect, useMemo, useReducer, useState } from "react"
import { cartReducer } from "../reducers/cartReducer"

export const CartContext = createContext()
CartContext.displayName = 'Cart'

const initialState = []

export const CartProvider = ({children}) => {
    const [cart, dispatch] = useReducer(cartReducer, initialState)
    const [amount, setAmount] = useState(0)
    const [totalValue, setTotalValue] = useState(0)

    const {totalTemp, amountTemp} = useMemo(() => {
        return cart.reduce(
            (acumulador, product) => ({
                amountTemp: acumulador.amountTemp + product.amount,
                totalTemp: acumulador.totalTemp + parseInt(product.product.actual_price) * product.amount
            }),
            {
                amountTemp: 0,
                totalTemp: 0
            }
        )
    }, [cart])

    useEffect(() => {    
        setAmount(amountTemp)
        setTotalValue(totalTemp)      
    })

    return (
        <CartContext.Provider value={{
            cart,
            dispatch,
            amount,
            totalValue
        }}>
            {children}
        </CartContext.Provider>
    )
}
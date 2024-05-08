import { createContext, useEffect, useMemo, useReducer, useState } from "react"
import { cartReducer } from "../reducers/cartReducer"
import { numberFormatter } from "@/utils/numberFormatter"
import { coinFormatter } from "@/utils/coinFormatter"

export const CartContext = createContext()
CartContext.displayName = 'Cart'

const initialState = []

export const CartProvider = ({children}) => {
    const [cart, dispatch] = useReducer(cartReducer, initialState)
    const [amount, setAmount] = useState(0)
    const [totalAmount, setTotalAmount] = useState(0)
    const [totalValue, setTotalValue] = useState(0)

    const {totalTemp, totalAmountTemp, amountTemp} = useMemo(() => {
        return cart.reduce(
            (acumulador, product) => ({
                amountTemp: acumulador.amountTemp + product.amount,
                totalAmountTemp: acumulador.totalAmountTemp + product.amount,
                totalTemp: acumulador.totalTemp + numberFormatter(product.product.actual_price) * product.amount
            }),
            {
                amountTemp: 0,
                totalAmountTemp: 0,
                totalTemp: 0
            }
        )
    }, [cart])

    useEffect(() => {    
        setAmount(amountTemp)
        setTotalAmount(totalAmountTemp)
        setTotalValue(coinFormatter(totalTemp))
    })

    return (
        <CartContext.Provider value={{
            cart,
            dispatch,
            amount,
            totalAmount,
            totalValue
        }}>
            {children}
        </CartContext.Provider>
    )
}
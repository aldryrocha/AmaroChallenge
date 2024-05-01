import { createContext, useReducer, useState } from "react"
import { cartReducer } from "../reducers/cartReducer"

export const CartContext = createContext()
CartContext.displayName = 'Cart'

const initialState = []

export const CartProvider = ({children}) => {
    const [cart, dispatch] = useReducer(cartReducer, initialState)
    const [quantidade, setQuantidade] = useState(0)
    const [totalValue, setTotalValue] = useState(0)

    return (
        <CartContext.Provider value={{
            cart,
            dispatch,
            quantidade,
            totalValue
        }}>
            {children}
        </CartContext.Provider>
    )
}
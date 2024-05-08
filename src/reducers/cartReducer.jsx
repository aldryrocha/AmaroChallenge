export const ADD_PRODUCT = "ADD_PRODUCT"
export const REMOVE_PRODUCT = "REMOVE_PRODUCT"
export const UPDATE_AMOUNT = "UPDATE_AMOUNT"

export const cartReducer = (state, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            const { newProductSku } = action.payload

            const product = state.findIndex((item) => item.productSku === newProductSku.productSku)
            if (product === -1) {
                newProductSku.amount = 1
                return [...state, newProductSku]
            } else {
                return state.map((item, index) =>
                    index === product ? { ...item, amount: item.amount + 1 } : item
                )
            }

        case REMOVE_PRODUCT:
            const productId = action.payload
            return state.filter((item) => item.productSku !== productId)

        case UPDATE_AMOUNT:
            const { productId: id, amount } = action.payload
            return state.map((item) =>
                item.productSku === id ? { ...item, amount } : item
            )
            
        default:
            return state
    }
}
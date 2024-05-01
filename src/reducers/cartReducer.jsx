export const ADD_PRODUCT = "ADD_PRODUCT"
export const REMOVE_PRODUCT = "REMOVE_PRODUCT"
export const UPDATE_QUANTIDADE = "UPDATE_QUANTIDADE"

export const cartReducer = (state, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            const { newProductSku, newProduct } = action.payload
            //console.log(newProductSku.product)
            console.log(state)

            const product = state.findIndex((item) => item.productSku === newProductSku.productSku)
            if (product === -1) {
                newProductSku.quantidade = 1
                return [...state, newProductSku]
            } else {
                return state.map((item, index) =>
                    index === product ? { ...item, quantidade: item.quantidade + 1 } : item
                )
            }

        case REMOVE_PRODUCT:
            const productId = action.payload
            return state.filter((item) => item.id !== productId)

        case UPDATE_QUANTIDADE:
            const { productId: id, quantidade } = action.payload
            return state.map((item) =>
                item.id === id ? { ...item, quantidade } : item
            )
        default:
            return state
    }
}
import { useContext } from "react"
import { CartContext } from "@/context/CartContext"
import { ADD_PRODUCT, REMOVE_PRODUCT, UPDATE_QUANTIDADE } from "@/reducers/cartReducer"

const addProductAction = (newProductSku, newProduct) => ({
  type: ADD_PRODUCT,
  payload: { newProductSku, newProduct }
})

const removeProductAction = (productId) => ({
  type: REMOVE_PRODUCT,
  payload: productId
})

const updateQuantidadeAction = (productId, quantidade) => ({
  type: UPDATE_QUANTIDADE,
  payload: { productId, quantidade},
})

export const useCartContext = () => {
  const {
    cart,
    dispatch, 
    quantidade,
    totalValue
  } = useContext(CartContext)

  function addProduct(newProductSku, newProduct){
    dispatch(addProductAction(newProductSku, newProduct))
  }

  function removingProduct(id) {
    const product = cart.find((item) => item.id === id)

    if (product && product.quantidade > 1) {
      dispatch(updateQuantidadeAction(id, product.quantidade - 1))
    } else {
      dispatch(removeProductAction(id))
    }
  }

  function removingProductCart(id) {
    dispatch(removeProductAction(id))
  }

  return{
    cart,
    addProduct,
    removingProduct,
    removingProductCart,
    totalValue,
    quantidade
  }
}
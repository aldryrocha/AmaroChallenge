import { useContext } from "react"
import { CartContext } from "@/context/CartContext"
import { ADD_PRODUCT, REMOVE_PRODUCT, UPDATE_AMOUNT } from "@/reducers/cartReducer"

const addProductAction = (newProductSku, newProduct) => ({
  type: ADD_PRODUCT,
  payload: { newProductSku, newProduct }
})

const removeProductAction = (productId) => ({
  type: REMOVE_PRODUCT,
  payload: productId
})

const updateAmountAction = (productId, amount) => ({
  type: UPDATE_AMOUNT,
  payload: { productId, amount},
})

export const useCartContext = () => {
  const {
    cart,
    dispatch, 
    amount,
    totalValue
  } = useContext(CartContext)

  function addProduct(newProductSku, newProduct){
    dispatch(addProductAction(newProductSku, newProduct))
  }

  function removingProduct(id) {
    const product = cart.find((item) => item.id === id)

    if (product && product.amount > 1) {
      dispatch(updateAmountAction(id, product.amount - 1))
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
    amount
  }
}
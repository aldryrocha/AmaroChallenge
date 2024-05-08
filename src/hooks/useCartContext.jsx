import { useContext } from "react"
import { CartContext } from "@/context/CartContext"
import { ADD_PRODUCT, REMOVE_PRODUCT, UPDATE_AMOUNT } from "@/reducers/cartReducer"

const addProductAction = (newProductSku) => ({
  type: ADD_PRODUCT,
  payload: { newProductSku }
})

const removeProductAction = (productId) => ({
  type: REMOVE_PRODUCT,
  payload: productId  
})

const updateAmountAction = (productId, amount) => ({
  type: UPDATE_AMOUNT,
  payload: { productId, amount}
})

export const useCartContext = () => {
  const {
    cart,
    dispatch, 
    amount,
    totalAmount,
    totalValue
  } = useContext(CartContext)

  function addProduct(newProductSku){
    dispatch(addProductAction(newProductSku))
  }

  function removingProduct(id) {
    const product = cart.find((item) => item.productSku === id)

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
    totalAmount,
    amount
  }
}
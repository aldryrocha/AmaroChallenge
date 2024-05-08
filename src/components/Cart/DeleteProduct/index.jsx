import React from "react"
import { FaRegTrashAlt } from "react-icons/fa"
import { Button } from "./styles.js"

const DeleteProduct = ({itemCart, removingProductCart}) => {
  return (
    <Button
        variant="deleteItem"
        aria-label="Delete"
        onClick={() => removingProductCart(itemCart.productSku)}
      ><FaRegTrashAlt /></Button>
  )
}

export default DeleteProduct
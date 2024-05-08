import React from "react"
import { Controls, Button, AmountValue } from "./styles.js"

const ControlsAmountProducts = ({ itemCart, addProduct, removingProduct }) => {

  return (
    <Controls>
        <Button 
          variant="removeItem"
          aria-label="Remove item"
          onClick={() => removingProduct(itemCart.productSku)}
        > - </Button>
        <AmountValue aria-label="Amount"> {itemCart.amount || 0} </AmountValue>
        <Button
          variant="addItem"
          aria-label="Add item"
          onClick={() => addProduct(itemCart)}
        > + </Button>
    </Controls>
  )
}

export default ControlsAmountProducts
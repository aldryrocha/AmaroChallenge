import React from "react"
import { useCartContext } from "@/hooks/useCartContext"
import { CartItem, CartItemContent, CartItemContentInner, CartItemImg, CartItemContentInfos } from "./styles.js"
import DeleteProduct from "../DeleteProduct"
import ControlsAmountProducts from "../ControlsAmountProducts"

const ItemCart = ({itemCart}) => {
    const {addProduct, removingProduct, removingProductCart} = useCartContext()
    const sizeProduct = itemCart.productSku.split("_").pop()

  return (
    <CartItem key={itemCart.product.id}>
        <figure>
            <CartItemImg src={itemCart.product.image} alt={itemCart.product.name} />
        </figure>
        <CartItemContent>
            <CartItemContentInner>
                <h3>{itemCart.product.name}</h3>
                <p>Tamanho: {sizeProduct}</p>

                {itemCart.product.actual_price}
            </CartItemContentInner>
            <CartItemContentInfos>                
                <ControlsAmountProducts
                    itemCart={itemCart}
                    addProduct={addProduct}
                    removingProduct={removingProduct} />
                <DeleteProduct 
                    variant="deleteItem"
                    aria-label="Delete"
                    itemCart={itemCart}
                    removingProductCart={removingProductCart} />
            </CartItemContentInfos>
        </CartItemContent>
    </CartItem>
  )
}

export default ItemCart
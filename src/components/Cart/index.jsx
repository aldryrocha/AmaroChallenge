import React, { useContext } from "react"
import { useCartContext } from "@/hooks/useCartContext"
import { styled } from "styled-components"
import { numberFormatter } from "@/utils/numberFormatter"
import ItemCart from "./ItemCart"
import TotalAmountCart from "./TotalAmountCart"
import TotalValueCart from "./TotalValueCart"

const ListProducts = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: column wrap;
    width: 80%;
    margin: 0 auto;
`

const CartSession = () => {
  const {cart, totalValue} = useCartContext()

  return (
    <ListProducts>
        <h3>Carrinho de Compras: <TotalAmountCart /></h3>
        {cart.length === 0 ? (
            <p>Não há produtos no carrinho</p>
        ) : (
            cart.map((itemCart) => {
                return <ItemCart key={itemCart.productSku} itemCart={itemCart} />
            })
        )}
        {totalValue != ('R$ 0,00') && <TotalValueCart />}
    </ListProducts>

  )
}

export default CartSession
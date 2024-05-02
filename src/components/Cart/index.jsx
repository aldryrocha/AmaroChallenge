import React, { useContext } from "react"
import { useCartContext } from "@/hooks/useCartContext"
import { styled } from "styled-components"
import ItemCart from "./ItemCart"

const ListProducts = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: column wrap;
    width: 80%;
    margin: 0 auto;
`

const Cart = () => {
  const {cart, amount} = useCartContext()

  return (
    <ListProducts>
        <h3>Carrinho de Compras <span>{amount} itens</span></h3>
        {cart.length === 0 ? (
            <p>Não há produtos no carrinho</p>
        ) : (
            cart.map((itemCart, index) => {
                console.log(itemCart)
                return <ItemCart key={itemCart.productSku} itemCart={itemCart} />
            })
        )}
    </ListProducts>

  )
}

export default Cart
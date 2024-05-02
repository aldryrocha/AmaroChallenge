import React from "react"
import { useCartContext } from "@/hooks/useCartContext"
import styles from './ItemCart.module.css'

const ItemCart = ({itemCart}) => {
    const {amount, totalValue} = useCartContext()
    const sizeProduct = itemCart.productSku.split("_").pop()

  return (
    <>
        <li className={styles.cart__item} key={itemCart.product.id}>
            <figure className={styles.cart__item__image}>
                <img
                    className={styles.imagem__produto}
                    src={itemCart.product.image}
                    alt={itemCart.product.name}
                />
            </figure>
            <div className={styles.cart__item__content}>
                <div className={styles.cart__item__contentInner}>
                    <h3>{itemCart.product.name}</h3>
                    <p>Tamanho: {sizeProduct}</p>

                    {itemCart.product.actual_price}
                    {/* parseInt(itemCart.product.actual_price.split("R$")) */}
                </div>
                <div className={styles.cart__item__contentInfos}>
                    {itemCart.amount}
                    <button>Remover</button>
                </div>
            </div>
        </li>
        <div>Valor total Carrinho: {totalValue}</div>
    </>
  )
}

export default ItemCart
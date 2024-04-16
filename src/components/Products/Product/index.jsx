import {styled} from "styled-components"

const CardProduct = styled.article`
    padding:50px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const Product = ({product}) => {
    return(
        <CardProduct>
            <img src={`${product.image}?&width=540`} ></img>
            <span>{product.discount_percentage}</span>
            <span>Escolha um Tamanho: </span>
            {product.sizes.map((itemSize, index) => {
                return <span key={index} className={`${itemSize.available}`}>{itemSize.size}</span>
            })}

            <h1>{product.name}</h1>
            <p>{product.regular_price}</p>
            <p>{product.actual_price}</p>

            <p>{product.installments}</p>
        </CardProduct>
    )
}

export default Product
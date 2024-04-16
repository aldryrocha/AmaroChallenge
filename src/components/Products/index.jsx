import {styled} from "styled-components"
import Product from "./Product"

const Products = ({products}) => {
    return(
        <ul>
            {products?.map((product, index) => {
                return <li key={index}><Product product={product} /></li>
            })}
        </ul>
    )
}

export default Products
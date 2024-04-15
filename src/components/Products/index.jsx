import {styled} from "styled-components"
import Product from "./Product"

const Products = ({products}) => {
    return(
        <>
            {products.map(product => <Product product={product} /> )}
        </>
    )
}

export default Products
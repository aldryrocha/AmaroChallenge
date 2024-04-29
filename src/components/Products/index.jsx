import {styled} from "styled-components"
import { useId } from 'react'
import Product from "./Product"

const ProductsSection = styled.section`
    margin: 0 auto;
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3rem;    
`

const Products = ({products}) => {    
    return(
        <ProductsSection>
            {products?.map((product) => {     
                let productid = useId()    
                return <Product key={productid} productId={productid} product={product} />                
            })}
        </ProductsSection>
    )
}

export default Products
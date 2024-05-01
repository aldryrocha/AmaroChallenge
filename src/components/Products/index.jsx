import {styled} from "styled-components"
import Product from "./Product"
import { useCartContext } from "@/hooks/useCartContext"

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
    const { addProduct } = useCartContext()

    return(
        <ProductsSection>
            {products?.map((product) => {
                return <Product key={crypto.randomUUID()} product={product} addProduct={addProduct} />
            })}
        </ProductsSection>
    )
}

export default Products
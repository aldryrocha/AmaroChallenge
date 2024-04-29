import {styled} from "styled-components"
import { useId } from 'react'

const CardProduct = styled.article`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 30%;
`

const ImageWrapper = styled.div`
    max-height: 650px;
    width: 100%;
    overflow-y: hidden;
    position: relative;
    &:hover > div{
        z-index:9;
    }
    img{
        max-width: 100%;
        position: relative;        
    }    
`
const InfoSizes = styled.div`
    position: absolute;
    bottom:0;
    text-align: center;
    width: 100%;
    background-color:rgba(241,239,232, 0.8);
    padding:1.5rem 0;
    -webkit-transition: .3s ease-in-out;
    transition: .3s ease-in-out;
    z-index: -1;
`
const Title = styled.span`
    display: block;
    padding-bottom: 0.5rem;
    font-weight:800;
    font-size: 0.9rem;
`
const Size = styled.button`
    padding: 0.5rem 0;
    margin: 0 0.3rem;
    display: inline-block;
    border-radius: var(--border-radius);
    border:1px solid var(--color-black);
    min-width:38px;
    font-size:0.9rem;    
    &:hover{
        color: var(--secondary-color);
        background-color: var(--color-black);
        cursor: pointer;
    }
`

const Discount = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--primary-color);
    z-index: 999;
    padding: 0.35rem;
    font-size: 0.75rem;
    font-weight:600;
`

const InfoContainer = styled.div`
`


const NameProduct = styled.h1`
    text-transform: capitalize;
    font-size: 1.25rem;
    line-height: 2rem;
`

const Price = styled.div`
    display: flex;
    p{
        margin: 0;
    }
`

const PriceActual = styled.p`
    font-weight: 700;
`

const OldPrice = styled.p`
    text-decoration: line-through;
    padding-left: 0.5rem;
`

const Product = ({productid, product}) => {
    const adicionarProduto = () => {
        console.log('entering' + productid)
    }
    return(
        <CardProduct productId={productid}>
            <ImageWrapper>
                {/*<img src={`${product.image}?&width=540`} />*/}
                <img src={product.image} />
                {product.discount_percentage && <Discount>{product.discount_percentage}</Discount>}
                <InfoSizes>
                    <Title>Escolha um Tamanho: </Title>
                    {product.sizes.map((itemSize) => {
                        if(itemSize.available){
                            return <Size key={useId()} onClick={() => adicionarProduto({productid, product}) }>{itemSize.size}</Size>
                        }
                    })}
                </InfoSizes>
            </ImageWrapper>
            <InfoContainer>
                <NameProduct>{product.name}</NameProduct>
                { product.discount_percentage ? 
                    <Price className="values">
                        <PriceActual>{product.actual_price}</PriceActual>
                        <OldPrice>{product.regular_price}</OldPrice>
                    </Price> 
                    : <PriceActual>{product.regular_price}</PriceActual>
                }
                <p>{product.installments}</p>
            </InfoContainer>
            
        </CardProduct>
    )
}

export default Product
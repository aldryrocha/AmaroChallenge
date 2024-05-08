import { useCartContext } from "@/hooks/useCartContext"
import { BoxTotalValue, Value } from "./styles.js"

const TotalValueCart = () => {
    const {totalValue} = useCartContext()
    return (
        <BoxTotalValue>
            Valor total Carrinho: <Value>{totalValue}</Value>
        </BoxTotalValue> 
    )
}

export default TotalValueCart
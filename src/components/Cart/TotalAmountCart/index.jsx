import { useCartContext } from "@/hooks/useCartContext"
import { AmountValue } from "./styles.js"

const TotalAmountCart = () => {
    const {totalAmount} = useCartContext()
    return (        
        <AmountValue>{totalAmount} itens</AmountValue>
    )
}

export default TotalAmountCart
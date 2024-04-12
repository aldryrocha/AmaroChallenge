import {styled} from "styled-components"
import { FaCartShopping } from "react-icons/fa6"

const IconCart = styled.div`
    width:30px;
    height:30px;    
    svg{
        color:var(--color-black)

    }
`

const CartButton = () => {
    return (
        <IconCart>
            <FaCartShopping size={30} />
        </IconCart>
    )
}

export default CartButton
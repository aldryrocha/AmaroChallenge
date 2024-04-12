import {styled} from "styled-components"
import Logo from "./Logo"
import Search from "./Search"
import CartButton from "./CartButton"

const HeaderStyled = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const Header = () => {
    return(
        <HeaderStyled>
            <Logo />
            <Search />
            <CartButton />
        </HeaderStyled>
    )
}

export default Header
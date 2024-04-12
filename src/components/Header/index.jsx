import {styled} from "styled-components"
import Logo from "./Logo"
import Search from "./Search"

const HeaderStyled = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
`

const Header = () => {
    return(
        <HeaderStyled>
            <Logo />
            <Search />
        </HeaderStyled>
    )
}

export default Header
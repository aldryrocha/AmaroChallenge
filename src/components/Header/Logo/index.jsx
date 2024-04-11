import styled from "styled-components"
import amaroLogo from '/images/Logotipo_da_Amaro.webp'

const LogoImg = styled.img`
  max-width: 200px;
  height: auto;
`

const Logo = () => {
    return(
        <a href="#">
            <h1><LogoImg src={amaroLogo} className="logo" alt="Amaro logo" /></h1>
        </a>
    )    
}

export default Logo
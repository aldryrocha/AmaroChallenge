import {styled} from "styled-components"
import { FaMagnifyingGlass } from "react-icons/fa6"

const ContainerEstilizado = styled.div`
    position: relative;
    display: inline-block;    
`
const CampoTextoEstilizado = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border:0;
    background: #f1efe8;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    padding-left:3.2rem;
`

const IconSearch = styled.div`
    position: absolute;
    top:15px;
    left:15px;
    width:30px;
    height:30px;
    
    svg{
        color:var(--color-black)
    }
`

const Search = () => {
    return (
        <ContainerEstilizado>
            <IconSearch><FaMagnifyingGlass size={25} /></IconSearch>
            <CampoTextoEstilizado placeholder="O que você está procurando?" />
        </ContainerEstilizado>
    )
}

export default Search
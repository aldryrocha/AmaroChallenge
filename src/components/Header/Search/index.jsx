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
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
`

const Search = () => {
    return (
        <ContainerEstilizado>
            <CampoTextoEstilizado placeholder="O que você está procurando?" />
            <FaMagnifyingGlass />
        </ContainerEstilizado>
    )
}

export default Search
import { createContext } from "react"

export const CarrinhoContext = createContext()
CarrinhoContext.displayName = 'Carrinho'

export const CarrinhoProvider = ({children}) => {
    const [carrinho, dispatch] = useReducer(carrinhoReducer, estadoInicial)
    const [quantidade, setQuantidade] = useState(0)
    const [valorTotal, setValorTotal] = useState(0)

    
}
import { useEffect, useState } from 'react'
import GlobalStyle from './components/GlobalStyle'
import Header from './components/Header'
import Products from './components/Products'
import Api from './services/api'
import { CartProvider } from "./context/CartContext"
import Cart from './components/Cart'

function App() {
  const [products, setProducts] = useState([])

  const getProducts = () => {
    Api.get('/products').then((response) => {
      setProducts(response.data)
    })
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
    <CartProvider>
      <GlobalStyle />
      <Header />
      <Cart/>
      <Products products={products} />
      </CartProvider>
    </>
  )
}

export default App

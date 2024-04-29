import { useEffect, useState } from 'react'
import GlobalStyle from './components/GlobalStyle'
import Header from './components/Header'
import Products from './components/Products'
import Api from './services/api'

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
      <GlobalStyle />
      <Header />
      <Products products={products} />
    </>
  )
}

export default App

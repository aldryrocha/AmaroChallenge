import { useEffect, useState } from 'react'
import GlobalStyle from './components/GlobalStyle'
import Header from './components/Header'
import Products from './components/Products'
import axios from 'axios'
import Product from './components/Products/Product'
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
        {products?.map(product => {
          return <Product name={product.name} product={product} /> 
        })}
    </>
  )
}

export default App

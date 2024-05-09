import React from "react"
import { useEffect, useState } from 'react'
import GlobalStyle from "@/components/GlobalStyle"
import Api from '@/services/api'
import Header from "@/components/Header"
import Products from "@/components/Products"

const Home = () => {
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
      <main>
        <Products products={products} />
      </main>
      {/* <Rodape /> */}
    </>
  )
}



export default Home
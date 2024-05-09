import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import Cart from './pages/Cart'
import Home from "./pages/Home"
import Page404 from "./pages/Page404"

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App

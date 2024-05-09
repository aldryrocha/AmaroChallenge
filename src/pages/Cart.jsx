import React from "react"
import Header from "@/components/Header"
import GlobalStyle from "@/components/GlobalStyle"
import CartSession from "@/components/Cart"

const Cart = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <CartSession/>
      </main>
      {/* <Rodape /> */}
    </>
  );
};

export default Cart
import React, { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartVisibile, setCartVisible] = useState(false);

  //handlers

  //toggleCartState
  const cartHandler = () => {
    setCartVisible((cartState) => !cartState);
  };

  return (
    <CartProvider>
      {/* Cart */}
      {cartVisibile && <Cart onCartHandler={cartHandler} />}
      {/* Header with tollbar and hero img */}
      <Header onCartHandler={cartHandler} />
      {/* Meals */}
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;

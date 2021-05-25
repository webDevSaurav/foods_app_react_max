import React, { Fragment } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <Fragment>
      {/* Cart */}
      <Cart />
      {/* Header with tollbar and hero img */}
      <Header />
      {/* Meals */}
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;

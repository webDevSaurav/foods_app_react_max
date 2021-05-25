import React, { Fragment } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <Fragment>
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

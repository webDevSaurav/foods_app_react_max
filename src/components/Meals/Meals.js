import React, { Fragment } from "react";

//import components
import MealsSummary from "./MealsSummry";
import AvilableMeals from "./AvilableMeals";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvilableMeals />
    </Fragment>
  );
};

export default Meals;

import React, { Fragment } from "react";

//import hero image
import heroImg from "../../Assets/meals.jpg";

//css import
import styles from "./Header.module.css";

//components import
import HeaderCartButton from "./HeaderCartButton";

const Header = ({ onCartHandler }) => {
  return (
    <Fragment>
      {/* Toolbar */}
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onCartHandler={onCartHandler} />
      </header>
      {/*Hero Image */}
      <div className={styles["main-image"]}>
        <img src={heroImg} alt="table full of food" />
      </div>
    </Fragment>
  );
};

export default Header;

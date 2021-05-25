import React, { Fragment } from "react";

//import hero image
import heroImg from "../../Assets/meals.jpg";

//css import
import styles from "./Header.module.css";

//components import
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <Fragment>
      {/* Toolbar */}
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      {/*Hero Image */}
      <div className={styles["main-image"]}>
        <img src={heroImg} alt="table full of food" />
      </div>
    </Fragment>
  );
};

export default Header;

import React, { Fragment } from "react";

//import hero image
import heroImg from "../../Assets/meals.jpg";

//css import
import styles from "./Header.module.css";

const Header = () => {
  return (
    <Fragment>
      {/* Toolbar */}
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      {/*Hero Image */}
      <div className={styles["main-image"]}>
        <img src={heroImg} alt="table full of food" />
      </div>
    </Fragment>
  );
};

export default Header;

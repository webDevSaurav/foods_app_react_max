import React from "react";

//import css
import styles from "./HeaderCartButton.module.css";

//import components
import CartIcon from "../Cart/CartIcon"; //svg icon
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
  return (
    <button className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <sapn className={classes.badge}>3</sapn>
    </button>
  );
};

export default HeaderCartButton;
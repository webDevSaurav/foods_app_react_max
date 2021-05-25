import React, { useContext } from "react";
import CartContext from "../../store/cart-context";

//import css
import styles from "./HeaderCartButton.module.css";

//import components
import CartIcon from "../Cart/CartIcon"; //svg icon
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = ({ onCartHandler }) => {
  const CartCtx = useContext(CartContext);

  const numberOfCartItems = CartCtx.items.reduce(
    (currNo, item) => currNo + item.amount,
    0
  );

  return (
    <button className={styles.button} onClick={onCartHandler}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <sapn className={classes.badge}>{numberOfCartItems}</sapn>
    </button>
  );
};

export default HeaderCartButton;

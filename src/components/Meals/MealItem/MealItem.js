import React, { useContext } from "react";
import CartContext from "../../../store/cart-context";
//css
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = ({ id, name, description, price }) => {
  const cartCtx = useContext(CartContext);
  //const
  //price format
  //always render 2 decimal positon
  const formattedPrice = `$${price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id,
      name,
      amount,
      price,
    });
  };
  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{formattedPrice}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;

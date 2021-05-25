import React from "react";

//css
import styles from "./Input.module.css";

const Input = ({ label, input }) => {
  return (
    <div className={styles.input}>
      <label htmlFor={input.id}>{label}</label>
      <input {...input} />
      {/*This enables to spread all the props on the input*/}
    </div>
  );
};

export default Input;

import React from "react";

//css
import styles from "./Input.module.css";

const Input = React.forwardRef(({ label, input }, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={input.id}>{label}</label>
      <input ref={ref} {...input} />
      {/*This enables to spread all the props on the input*/}
    </div>
  );
});

export default Input;

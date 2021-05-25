import React, { Fragment } from "react";
import ReactDOM from "react-dom";

//css
import styles from "./Modal.module.css";

//backdrop
const BackDrop = ({ onCartHandler }) => {
  return <div className={styles.backdrop} onClick={onCartHandler}></div>;
};

//overlay
const ModalOverlay = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

//cont
const portalElement = document.getElementById("overlays");

const Modal = ({ children, onCartHandler }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop onCartHandler={onCartHandler} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;

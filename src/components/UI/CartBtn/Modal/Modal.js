import React, { Fragment } from "react";
import reactDom from "react-dom";
import style from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={style.backdrop} onClick={props.onClose}></div>;
};

const ModalContent = (props) => {
  return <div className={style.modal}>{props.children}</div>;
};

const overlay = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <Fragment>
      {reactDom.createPortal(
        <Backdrop onClose={props.onClose}></Backdrop>,
        overlay
      )}
      {reactDom.createPortal(
        <ModalContent>{props.children}</ModalContent>,
        overlay
      )}
    </Fragment>
  );
};

export default Modal;

import React, { useState, useContext, useEffect } from "react";
import CartContext from "../../../store/CartContext";
import style from "./CartBtn.module.css";

const CartIcon = () => {
  return (
    <svg
      className={style["cart-icon"]}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="20"
    >
      <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.305-15l-3.432 12h-10.428l-2.937-7h11.162l-1.412 5h2.078l1.977-7h-16.813l4.615 11h13.239l3.474-12h1.929l.743-2h-4.195z" />
    </svg>
  );
};

const CartBtn = (props) => {
  const cartCtx = useContext(CartContext);
  const itemCount = cartCtx.items.reduce((curVal, item) => {
    return (curVal += item.amount);
  }, 0);
  const [btnBump, setBtnBump] = useState(false);
  useEffect(() => {
    setBtnBump(true);
    setTimeout(() => {
      setBtnBump(false);
    }, 300);
  }, [cartCtx.items]);
  return (
    <button
      className={`${style["cart-btn"]} ${btnBump ? style["btn-bump"] : ""}`}
      onClick={props.onClick}
    >
      <span>
        <CartIcon />
      </span>
      <span className={style.badge}>{itemCount || 0}</span>
    </button>
  );
};

export default CartBtn;

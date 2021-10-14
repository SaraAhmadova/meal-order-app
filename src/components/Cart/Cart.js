import React, { useContext } from "react";
import CartContext from "../../store/CartContext";
import Modal from "../UI/CartBtn/Modal/Modal";
import style from "./Card.module.css";

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const increaseAmount = (item) => {
    cartContext.addItem({
      ...item,
      amount: 1
    })
  };
  const decreaseAmount = (id) => {
    cartContext.removeItem(id)
  };

  return (
    <Modal onClose={props.onCloseModal}>
      <div className={style.content}>
        <h1>Your Orders</h1>

        <div className={style.cartItems}>
        {cartContext.items.map((item) => {
           
          return (
            <div key={item.id} className={style.meal}>
              <h3>{item.name}</h3>
              <div className={style.mealAmount}>
                <h4>{item.price}₼</h4>
                <h5> x </h5>
                <h4> {item.amount} pcs</h4>
                <button type="button" onClick={increaseAmount.bind(null,item)}>+</button>
                <button type="button" onClick={decreaseAmount.bind(null, item)}>-</button>
                {/* <button type="button">x</button> */}
              </div>
            </div>
          );
        })}
        </div>

        <div className={style.bottom}>
          <h2>
            Total Amount:
            <span>{cartContext.totalAmount.toFixed(2) || 0} ₼</span>
          </h2>
          <div className={style["btn-area"]}>
            <button className={style["btn-alt"]} onClick={props.onCloseModal}>
              Close
            </button>
            {cartContext.items.length !== 0 && (
              <button className={style.btn}>Order</button>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;

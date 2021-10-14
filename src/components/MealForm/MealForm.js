import React, { useRef, useContext } from "react";
import CartContext from "../../store/CartContext";
import style from "./MealForm.module.css";

const MealForm = (props) => {
  const countRef = useRef(1);
  const cartCtx = useContext(CartContext);
  const addToCart = (e) => {
    e.preventDefault();
    cartCtx.addItem({
      id: props.meal.id,
      price: props.meal.price,
      amount: +countRef.current.value,
      name: props.meal.name,
    });
    
  };
  return (
    <div className={style.bottomBar}>
      <form onSubmit={addToCart}>
        <div className={style.amount}>
          <label>Amount: </label>
          <input
            ref={countRef}
            type="number"
            defaultValue="1"
            min="1"
            step="1"
            className={style.mealCount}
          />
        </div>
        <button className={style.addCart}>Add to Cart</button>
      </form>
    </div>
  );
};

export default MealForm;

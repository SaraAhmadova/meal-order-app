import React from "react";
import MealForm from "../MealForm/MealForm";
import style from "./MealCard.module.css";

const MealCard = (props) => {
  return (
    <div className={style.mealCard}>
      <h1>{props.meal.name}</h1>
      <p>{props.meal.description}</p>
      <span>{props.meal.price.toFixed(2)} ₼</span>
      <MealForm meal={props.meal}  />
    </div>
  );
};

export default MealCard;

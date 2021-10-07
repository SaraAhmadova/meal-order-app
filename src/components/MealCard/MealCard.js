import React, {useState} from 'react'
import style from './MealCard.module.css'

const MealCard = props => {
    const [mealCount, setMealCount] = useState(1)
    return (
        <div className={style.mealCard}>
            <h1>{props.meal.name}</h1>
            <p>{props.meal.description}</p>
            <div className={style.bottomBar}>
                <span>{props.meal.price.toFixed(2)}  ₼</span>
                <input type="number" value={mealCount} className={style.mealCount} onChange={(e)=>{setMealCount(e.target.value++)}}/>
            </div>
            <button className={style.addCart}>Add to Cart</button>
        </div>
    )
}

export default MealCard

import React from 'react'
import style from './Meals.module.css'
import MealCard from '../MealCard/MealCard'

const Meals = props => {
    const meals_arr = [
        {
            id: 'm0',
            name: "Sezar Salad",
            description: "Fine healthy salad",
            price: 14.50
        },
        {
            id: 'm1',
            name: "Schnitzel",
            description: "Fine German meal",
            price: 22.99
        },
        {
            id: 'm2',
            name: "Sushi",
            description: "Finest fish and veggies",
            price: 20.50
        },
        {
            id: 'm3',
            name: "Sezar Salad",
            description: "Fine healthy salad",
            price: 14.50
        },
        {
            id: 'm4',
            name: "Tom Yum Soup",
            description: "Traditional Soup with Thai herbs",
            price: 14.50
        },
        {
            id: 'm5',
            name: "Jasmine Rice",
            description: "Meal with delicate floral and buttery scent",
            price: 4.50
        },
        {
            id: 'm6',
            name: "Thai Basil",
            description: "With green beans, bamboo shoots and onion.",
            price: 25.90
        },
        {
            id: 'm7',
            name: "Fresh Ginger",
            description: "With onion, carrot and market fresh vegetables.",
            price: 24.50
        }
    ]

    return (
        <section className={style.mealsContainer}>
            {meals_arr.map(meal=> <MealCard key={meal.id} meal={meal}/>)}
        </section>
    )
}

export default Meals

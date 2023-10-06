import React from 'react';

function MealCard({ meal, onFetchMealDetails }) {
  return (
    <div className='meal-card' onClick={() => onFetchMealDetails(meal.idMeal)}>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <h3>{meal.strMeal}</h3>
    </div>
  );
}

export default MealCard;


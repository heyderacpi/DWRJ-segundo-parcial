
import React from 'react';

function MealDescription(props) {
  const { mealDetails, setShowMealDescription } = props;

  const handleBackClick = () => {
    setShowMealDescription(false);
  };

  return (
    <div className="meal-description">
      <div className="meal-description-header">
        <button onClick={handleBackClick}>Volver</button>
      </div>
      {mealDetails && (
        <div>
          <img src={mealDetails.strMealThumb} alt={mealDetails.strMeal} />
          <h2>{mealDetails.strMeal}</h2>
          <p>{mealDetails.strInstructions}</p>
        </div>
      )}
    </div>
  );
}

export default MealDescription;

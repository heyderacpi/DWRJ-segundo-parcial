import React from 'react';

function Home({ searchResults, onFetchMealDetails }) {
  const mealsPerRow = 4;
  const mealRows = [];
  for (let i = 0; i < searchResults.length; i += mealsPerRow) {
    const mealRow = searchResults.slice(i, i + mealsPerRow);
    mealRows.push(mealRow);
  }
  const handleRecipeClick = (id) => {
    onFetchMealDetails(id);
  };
  return (
    <div className='page'>
      <h1>Todas las Recetas</h1>
      <div className='meal-grid'>
        {mealRows.map((row, rowIndex) => (
          <div key={rowIndex} className='meal-row'>
            {row.map((meal) => (
              <div key={meal.idMeal} className='meal-card' onClick={() => handleRecipeClick(meal.idMeal)}>
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                <p>{meal.strMeal}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
export default Home;


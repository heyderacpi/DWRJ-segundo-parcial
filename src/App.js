import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import SearchBox from './components/searchBox';
import Home from './home';
import MealDescription from './MealDescription';
import {
  SearchMealByName,
  FetchMealById,
  FetchMealByFirstLetter,
  GetAllMeals,
} from './Api';
function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [mealDetails, setMealDetails] = useState(null);
  const [letterResults, setLetterResults] = useState([]);
  const [error, setError] = useState(null);
  const [showMealDescription, setShowMealDescription] = useState(false);
  const handleSearchByName = async (name) => {
    try {
      const meals = await SearchMealByName(name);
      setSearchResults(meals || []);
      setError(null);
    } catch (error) {
      setError("Error al buscar recetas.");
      console.error(error);
    }
  };
  const handleFetchMealDetails = async (id) => {
    try {
      const meal = await FetchMealById(id);
      setMealDetails(meal);
      setError(null);
      setShowMealDescription(true);
    } catch (error) {
      setError("Error al obtener detalles de la receta.");
      console.error(error);
    }
  };
  const handleSearchByLetter = async (letter) => {
    try {
      const meals = await FetchMealByFirstLetter(letter);
      setLetterResults(meals || []);
      setError(null);
    } catch (error) {
      setError("Error al buscar recetas por letra.");
      console.error(error);
    }
  };
  const getAllMeals = async () => {
    try {
      const meals = await GetAllMeals();
      setSearchResults(meals || []);
      setError(null);
    } catch (error) {
      setError("Error al obtener todas las recetas.");
      console.error(error);
    }
  };
  useEffect(() => {
    getAllMeals();
  }, []);

  return (
    <div className='App'>
      <Navbar>
        <SearchBox onSearch={handleSearchByName} />
      </Navbar>
      {error && <div className="error">{error}</div>}
      {showMealDescription ? (
        <MealDescription
          mealDetails={mealDetails}
          setShowMealDescription={setShowMealDescription}
        />
      ) : (
        <Home
          searchResults={searchResults}
          mealDetails={mealDetails}
          letterResults={letterResults}
          onFetchMealDetails={handleFetchMealDetails}
          onSearchByLetter={handleSearchByLetter}
        />
      )}
    </div>
  );
}
export default App;

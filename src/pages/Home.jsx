import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeCard from '../components/RecipeCard';

// Access API key from environment variables
const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`
        );
        setRecipes(response.data.recipes);
      } catch (err) {
        setError('Failed to fetch recipes. Please try again later.');
      }
    };
    fetchRecipes();
  }, []);

  return (
    <div className="home">
      {error ? (
        <p className="error">{error}</p>
      ) : (
        <div className="recipe-list">
          {recipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;

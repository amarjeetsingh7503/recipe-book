import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => (
  <div className="recipe-card">
    <img src={recipe.image} alt={recipe.title} width={300}/>
    <h3 className='recipe-card-heading'>{recipe.title}</h3>
    <p className='recipe-card-details'>{recipe.summary.replace(/<[^>]*>/g, '').slice(0, 100)}...</p>
    <Link to={`/recipe/${recipe.id}`} className="details-link">View Details</Link>
  </div>
);

export default RecipeCard;

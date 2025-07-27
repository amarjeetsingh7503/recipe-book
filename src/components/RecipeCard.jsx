import React from "react";
import { Link } from "react-router-dom";
import "./styles/RecipeCard.css";

const RecipeCard = ({ recipe }) => {
  // console.log(recipe);
  return (
    <div className="recipe-card">
      <div>
        <img src={recipe.image} alt={recipe.title} className="recipe-image" />
      </div>
      <div>
        <div>
          <div className="recipe-card-heading">{recipe.title}</div>
        </div>

        <div className="link-btn">
          <Link to={`/recipe/${recipe.id}`} className="details-link">
            View Details
          </Link>
        </div>
        <div className="recipe-tags">
          {recipe.vegan ? (
            <div>Vegan</div>
          ) : (
            <div style={{ display: "none" }}></div>
          )}
          {recipe.vegetarian ? (
            <div>Vegetarian</div>
          ) : (
            <div>Non-Vegetarian</div>
          )}
          {recipe.glutenFree ? (
            <div>Gluten Free</div>
          ) : (
            <div style={{ display: "none" }}></div>
          )}
        </div>
        <div className="recipe-card-info">
          Prep-Time: {recipe.readyInMinutes} minutes | Servings:{" "}
          {recipe.servings}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;

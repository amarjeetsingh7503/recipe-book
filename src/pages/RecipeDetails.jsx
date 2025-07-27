import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;
import "./styles/RecipeDetails.css";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
        );
        setRecipe(response.data);
      } catch (err) {
        setError("Failed to fetch recipe details. Please try again later.");
      }
    };
    fetchRecipeDetails();
  }, [id]);

  if (error) return <p className="error">{error}</p>;
  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="recipe-details">
      <h1 style={{ textTransform: "uppercase", textAlign: "center" }}>
        {recipe.title}
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={recipe.image}
          alt={recipe.title}
          style={{
            width: "70%",
            height: "28rem",
            borderRadius: "2rem",
          }}
        />
      </div>
      <h3>Description:</h3>
      <div
        className="recipe-summary"
        dangerouslySetInnerHTML={{ __html: recipe.summary }}
      ></div>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.extendedIngredients.map((ing) => (
          <li key={ing.id}>{ing.original}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <p
        dangerouslySetInnerHTML={{ __html: recipe.instructions }}
        className="recipe-instructions"
      ></p>
    </div>
  );
};

export default RecipeDetails;

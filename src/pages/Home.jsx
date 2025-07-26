import React, { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from "../components/RecipeCard";
import Banner from "../components/Banner";

const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/random?number=12&apiKey=${API_KEY}`
        );
        setRecipes(response.data.recipes);
      } catch (err) {
        setError("Failed to fetch recipes. Please try again later.");
      }
    };
    fetchRecipes();
  }, []);

  return (
    <div className="home">
      <Banner />

      <div
        style={{
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "bold",
          margin: "3rem 0rem",
        }}
      >
        What to <span style={{ color: "#eca83f" }}>Cook</span>?
      </div>

      {error ? (
        <p className="error" style={{ textAlign: "center" }}>
          {error}
        </p>
      ) : recipes.length === 0 ? (
        <p
          className="loading"
          style={{ textAlign: "center", fontSize: "1.2rem" }}
        >
          Wait while recipes are loading.....
        </p>
      ) : (
        <div className="recipe-list">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from "../components/RecipeCard";
import Banner from "../components/Banner";
import "./styles/Home.css";
import SearchIcon from "@mui/icons-material/Search";

const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState("");
  const [input, setInput] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!input.trim()) {
      setError("Please enter at least one ingredient.");
      return;
    }

    const ingredients = input
      .split(",")
      .map((item) => item.trim())
      .join(",");

    try {
      setError("");
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=12&apiKey=${API_KEY}`
      );
      setRecipes(response.data);
    } catch (err) {
      console.log(err);
      setError("Failed to fetch recipes. Please try again.");
    }
  };

  return (
    <div className="home">
      <Banner />

      <div className="heading">
        What to <span style={{ color: "#eca83f" }}>Cook</span>?
      </div>

      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search your ingredients"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">
          <SearchIcon />
        </button>
      </form>

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

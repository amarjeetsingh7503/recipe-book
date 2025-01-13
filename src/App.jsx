import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import RecipeDetails from './pages/RecipeDetails';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/recipe-book/" element={<Home />} />
      <Route path="/recipe-book/recipe/:id" element={<RecipeDetails />} />
    </Routes>
  </>
);

export default App;

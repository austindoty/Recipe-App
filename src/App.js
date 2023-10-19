import React, { useState } from "react";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";
import './App.css';

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  const deleteRecipe = (recipeToDelete) => {
    setRecipes(recipes.filter(recipe => recipe !== recipeToDelete));
  };

  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} onDelete={deleteRecipe} />
      <RecipeCreate onAdd={addRecipe} />
    </div>
  );
}

export default App;
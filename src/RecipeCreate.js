import React, { useState } from "react";

function RecipeCreate({ onAdd }) {
  const [newRecipe, setNewRecipe] = useState({
    name: "", cuisine: "", photo: "", ingredients: "", preparation: ""
  });

  const handleInputChange = (event) => {
    setNewRecipe({
      ...newRecipe,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd(newRecipe);
    setNewRecipe({
      name: "", cuisine: "", photo: "", ingredients: "", preparation: ""
    });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <input name="name" value={newRecipe.name} onChange={handleInputChange} placeholder="Name" />
      <input name="cuisine" value={newRecipe.cuisine} onChange={handleInputChange} placeholder="Cuisine" />
      <input name="photo" value={newRecipe.photo} onChange={handleInputChange} placeholder="Photo URL" />
      <textarea name="ingredients" value={newRecipe.ingredients} onChange={handleInputChange} placeholder="Ingredients" />
      <textarea name="preparation" value={newRecipe.preparation} onChange={handleInputChange} placeholder="Preparation" />
      <button type="submit">Create</button>
    </form>
  );
}

export default RecipeCreate;

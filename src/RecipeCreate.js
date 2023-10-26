import React, { useState } from "react";


function RecipeCreate({createRecipe}) { 
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({ ...initialFormState });
  const handleChange = ({ target }) => {  
    const value = target.value;
    setFormData({
      ...formData,
      [target.name]: value,
    });
  };
 const handleSubmit = (event) => {
    event.preventDefault();
    if (
      formData.name === "" ||
      formData.cuisine === "" ||
      formData.ingredients === "" ||
      formData.preparation === ""
    ) {
      setError("Please fill in all the required fields.");
    } else {
      props.setRecipes([...props.recipes, formData]);
      setFormData({ ...initialFormState });
      setError("");
    }
  };
  // ADDED: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // ADDED: Add the required submit and change handlers
  
  return (
    <form name="create" onSubmit={handleSubmit}>
     {error && <p style={{ color: "red" }}>{error}</p>}
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                value={formData.name}
              />
              </label>
            </td>
            <td>
              <label htmlFor="cuisine">
              <input
                id="cuisine"
                type="text"
                name="cuisine"
                placeholder="Cuisine"
                onChange={handleChange}
                value={formData.cuisine}
              />
              </label>
            </td>
            <td>
              <label htmlFor="photo">
              <input
                id="photo"
                type="text"
                name="photo"
                placeholder="URL"
                onChange={handleChange}
                value={formData.photo}
              />
              </label>
            </td>
            <td>
              <label htmlFor="ingredients">
              <textarea
                id="ingredients"
                type="text"
                name="ingredients"
                placeholder="Ingredients"
                onChange={handleChange}
                value={formData.ingredients}
              />
              </label>
            </td>
            <td>
              <label htmlFor="preparation">
              <textarea
                id="preparation"
                type="text"
                name="preparation"
                placeholder="Preparation"
                onChange={handleChange}
                value={formData.preparation}
              />
              </label>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

  // ADDED: Add the required input and textarea form elements.


export default RecipeCreate;
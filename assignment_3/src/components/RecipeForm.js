import React, { useState } from "react";

const RecipeForm = ({ recipes, setRecipes }) => {
  const [Recipe, setRecipe] = useState({
    id: 0,
    title: "",
    body: "",
    date: "",
  });
  const [err, setErr] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      Recipe.id !== 0 &&
      Recipe.title !== "" &&
      Recipe.body !== "" &&
      Recipe.date !== ""
    ) {
      setRecipes([...recipes, { ...Recipe }]);
      setRecipe({ title: "", body: "", date: "" });
      setErr("");
    } else {
      setErr("Fill all the above fields");
    }
  };

  const handleChange = (e) => {
    setRecipe({
      ...Recipe,
      [e.target.name]: e.target.value,
      id: Math.random() * 1000,
    });
  };
  return (
    <>
      <form>
        <div className="form-recipe">
          <h2>Recipe List</h2>
          <br />
          <input
            type="title"
            name="title"
            placeholder="Name of the Dish"
            required
            id="input-title"
            value={Recipe.title}
            onChange={handleChange}
          ></input>
          <br />
          <textarea
            type="body"
            name="body"
            placeholder="Ingredients and Steps how to cook"
            required
            id="input-body"
            value={Recipe.body}
            onChange={handleChange}
          ></textarea>
          <br />
          <input
            type="date"
            name="date"
            placeholder="Date (DD/MM/YYYY)"
            required
            id="input-date"
            value={Recipe.date}
            onChange={handleChange}
          ></input>
          <br />
          <span style={{ color: "red" }}>{err}</span>
          <br />
          <br />
          <button type="submit" className="btn-add" onClick={handleSubmit}>
            Add Recipe
          </button>
          <br />
          <br />
        </div>
      </form>
    </>
  );
};
export default RecipeForm;

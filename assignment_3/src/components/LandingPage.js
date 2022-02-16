import React from "react";
import { Link } from "react-router-dom";
import RecipeForm from "./RecipeForm";

const LandingPage = ({ isLoggedIn, recipes, setRecipes }) => {
  const deleteHandler = (id) => {
    let newRecipes = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(newRecipes);
  };
  return (
    <>
      <div className="recipes-container">
        {isLoggedIn ? (
          <ul className="recipes-list">
            <RecipeForm recipes={recipes} setRecipes={setRecipes} />
            <h3>Recipes</h3>
            {recipes.map((recipe) => {
              return (
                <>
                  <div className="recipeList-div" key={recipe.id}>
                    <ul id="recipe-title" key={recipe.id}>
                      <li>{recipe.title}</li>
                      <li>Ingridents : {recipe.body}</li>
                      <li>Date : {recipe.date}</li>
                    </ul>
                    <button
                      className="trash-btn"
                      onClick={() => deleteHandler(recipe.id)}
                    >
                      Remove
                    </button>
                  </div>
                </>
              );
            })}
          </ul>
        ) : (
          <div className="landing-page">
            <h1>Recipe Application</h1>
            <h3>
              <Link to={"/login"} className="link">
                Login/Register
              </Link>
              to use
            </h3>
          </div>
        )}
      </div>
    </>
  );
};
export default LandingPage;

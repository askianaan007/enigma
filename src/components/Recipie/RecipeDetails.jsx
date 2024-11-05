import React from "react";

const RecipeDetails = ({ recipe }) => (
  <section className="py-8 flex flex-col">
    <h1 className="text-4xl font-bold text-gray-800 mb-8">{recipe.strMeal}</h1>
    <img
      src={recipe.strMealThumb}
      alt={recipe.strMeal}
      className="w-[300px] h-[300px] rounded-lg shadow-lg mb-8"
    />
    <h2 className="text-2xl font-bold text-gray-800 mb-4">Instructions</h2>
    <p className="text-gray-600 mb-6">{recipe.strInstructions}</p>
    <div className="flex space-x-6 text-gray-500">
      <p>Category: {recipe.strCategory} </p>
      <p>Area of food: {recipe.strArea}</p>
    </div>
  </section>
);

export default RecipeDetails;

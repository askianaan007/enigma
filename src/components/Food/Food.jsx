import React, { useEffect } from "react";
import { unsave } from "../../assets/assets";
import { Link } from "react-router-dom";
import axios from "axios";

const Food = ({ meal, id }) => {
  const handleAddToFavorites = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/favourite",
        { recipeId: id },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }, // Assuming you store the token in local storage
        }
      );
      alert(response.data.message);
      console.log(`${id}is saved`);
    } catch (error) {
      alert(error || "Error adding to favorites.");
    }
  };

  return (
    <div className="">
      <Link to={`/recipe/${id}`}>
        <img
          src={meal.strMealThumb}
          className="w-[180px] h-[180px] rounded-3xl mt-10 bg-foodGray"
        />
      </Link>
      <div className="flex gap-2 mt-3">
        <p className="text-xs text-subTextGray">Soupes</p>
        <img
          className="w-3 stroke-blue-500 pointer cursor-pointer"
          src={unsave}
          onClick={handleAddToFavorites}
        />
      </div>
      <Link className="text-sm font-medium mt-1">{meal.strMeal}</Link>
    </div>
  );
};

export default Food;

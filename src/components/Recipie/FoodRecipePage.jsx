import React, { useEffect, useState } from "react";
import Navbar from "../layouts/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getFoodRecipe } from "../../redux/Actions/FoodActions";
import { PropagateLoader } from "react-spinners";
import Ingredients from "./Ingredients";
import RecipeDetails from "./RecipeDetails";
import { useParams } from "react-router-dom";

const FoodRecipePage = () => {
  const { meals } = useSelector((state) => state.recipeState);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFoodRecipe(id));
  }, [dispatch]);

  return (
    <div className="bg-homePink min-h-screen pb-10">
      <Navbar />
      {meals ? (
        <div className="px-[10%] pt-10">
          <div className="relative min-h-screen">
            {meals.map((meal) => (
              <React.Fragment key={meal.idMeal}>
                <RecipeDetails recipe={meal} />
                <Ingredients ingredients={meal} />
              </React.Fragment>
            ))}
          </div>
        </div>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
          <PropagateLoader color={"#ff5e7f"} size={25} />
        </div>
      )}
    </div>
  );
};

export default FoodRecipePage;

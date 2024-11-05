import axios from "axios";
import {
  categoryFail,
  categoryRequest,
  categorySuccess,
  categoryReset,
} from "../Slices/CategotySlice.js";
import {
  foodFail,
  foodRequest,
  foodSuccess,
  foodReset,
} from "../Slices/FoodSlices.js";

import {
  recipeFail,
  recipeRequest,
  recipeSuccess,
} from "../Slices/RecipeSlice.js";

export const getCategory = () => async (dispatch) => {
  try {
    dispatch(categoryRequest());
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    dispatch(categorySuccess(response.data));
  } catch (error) {
    dispatch(
      categoryFail(
        error.response?.data?.message || "Failed to fetch categories"
      )
    );
  }
};

export const getFoodByCategory =
  ({ category }) =>
  async (dispatch) => {
    try {
      dispatch(foodRequest());
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      dispatch(foodSuccess(response.data));
    } catch (error) {
      dispatch(
        foodFail(error.response?.data?.message || "Failed to fetch categories")
      );
    }
  };

export const getFoodRecipe = (id) => async (dispatch) => {
  try {
    dispatch(recipeRequest());
    console.log(typeof id);

    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    dispatch(recipeSuccess(response.data));
  } catch (error) {
    dispatch(
      recipeFail(error.response?.data?.message || "Failed to fetch recipes")
    );
  }
};

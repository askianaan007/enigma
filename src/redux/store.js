import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import foodReducer from "./Slices/FoodSlices.js";
import categoryReducer from "./Slices/CategotySlice.js";
import recipeReducer from "./Slices/RecipeSlice.js";

const reducer = combineReducers({
  foodState: foodReducer,
  categoryState: categoryReducer,
  recipeState: recipeReducer,
});

const store = configureStore({
  reducer,
  middleware: () => [thunk],
});

export default store;

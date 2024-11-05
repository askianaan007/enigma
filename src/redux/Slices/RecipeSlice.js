import { createSlice } from "@reduxjs/toolkit";

const recipeSlice = createSlice({
  name: "recipe",
  initialState: {
    loading: false,
    recipe: [],
    error: null,
  },
  reducers: {
    recipeRequest(state) {
      return { loading: true };
    },

    recipeSuccess(state, action) {
      return {
        loading: false,
        meals: action.payload.meals,
      };
    },

    recipeReset(state) {
      return { meals: meals[""] };
    },

    recipeFail(state) {
      return { loading: false };
    },
  },
});

const { actions, reducer } = recipeSlice;
export const { recipeRequest, recipeSuccess, recipeFail, recipeReset } =
  actions;
export default reducer;

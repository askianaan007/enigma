import { createSlice } from "@reduxjs/toolkit";

const foodSlice = createSlice({
  name: "food",
  initialState: {
    loading: false,
    meals: [],
    error: null,
  },
  reducers: {
    foodRequest(state) {
      return { loading: true };
    },

    foodSuccess(state, action) {
      return {
        loading: false,
        meals: action.payload.meals,
      };
    },

    foodReset(state) {
      return { meals: meals[""] };
    },

    foodFail(state) {
      return { loading: false };
    },
  },
});

const { actions, reducer } = foodSlice;
export const {
  foodRequest,
  foodSuccess,
  foodFail,
  foodReset,
} = actions;
export default reducer;

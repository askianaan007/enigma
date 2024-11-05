import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    loading: false,
    categories: [],
    error: null,
  },
  reducers: {
    categoryRequest(state) {
      state.loading = true;
    },

    categorySuccess(state, action) {
      state.loading = false;
      state.categories = action.payload.categories;
    },

    categoryReset(state) {
      state.categories = categories[""];
    },

    categoryFail(state) {
      state.loading = false;
    },
  },
});

const { actions, reducer } = categorySlice;

export const { categoryRequest, categorySuccess, categoryReset, categoryFail } =
  actions;
export default reducer;

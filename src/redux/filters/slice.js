import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: INITIAL_STATE,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

const filtersReducer = filtersSlice.reducer;

export const { changeFilter } = filtersSlice.actions;
export const selectNameFilter = (state) => state.filters.name;

export default filtersReducer;

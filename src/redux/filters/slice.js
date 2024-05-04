import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: INITIAL_STATE,
  reducers: {
    changeNameFilter(state, action) {
      state.name = action.payload;
    },
  },
});

const filtersReducer = filtersSlice.reducer;

export const { changeNameFilter } = filtersSlice.actions;

export default filtersReducer;

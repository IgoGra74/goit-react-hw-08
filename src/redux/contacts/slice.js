import { createSlice } from "@reduxjs/toolkit";
import { apiAddContact, apiDeleteContact, apiGetContacts } from "./contactsOps";

const INITIAL_STATE = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",

  initialState: INITIAL_STATE,
  extraReducers: (builder) =>
    builder
      .addCase(apiGetContacts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(apiGetContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(apiGetContacts.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(apiAddContact.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(apiAddContact.fulfilled, (state, action) => {
        state.items = [...state.items, action.payload];
        state.loading = false;
      })
      .addCase(apiAddContact.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(apiDeleteContact.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(apiDeleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        state.loading = false;
      })
      .addCase(apiDeleteContact.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      }),
});
const contactsReducer = contactsSlice.reducer;

export default contactsReducer;

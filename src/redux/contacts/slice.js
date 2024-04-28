import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { apiAddContact, apiDeleteContact, apiGetContacts } from "./operations";

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
      .addCase(apiGetContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(apiAddContact.fulfilled, (state, action) => {
        state.items = [...state.items, action.payload];
        state.loading = false;
      })
      .addCase(apiDeleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        state.loading = false;
      })

      .addMatcher(
        isAnyOf(
          apiGetContacts.pending,
          apiAddContact.pending,
          apiDeleteContact.pending
        ),
        (state) => {
          state.loading = true;
          state.error = false;
        }
      )
      .addMatcher(
        isAnyOf(
          apiGetContacts.rejected,
          apiAddContact.rejected,
          apiDeleteContact.rejected
        ),
        (state, action) => {
          state.error = action.payload;
          state.loading = false;
        }
      ),
});
const contactsReducer = contactsSlice.reducer;

export default contactsReducer;

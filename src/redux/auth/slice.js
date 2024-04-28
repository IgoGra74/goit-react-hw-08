import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { login, logout, refreshUser, register } from "./operations";
// import { apiAddContact, apiDeleteContact, apiGetContacts } from "./contactsOps";
// import { selectNameFilter } from "./filtersSlice";

const INITIAL_STATE = {
  user: {
    name: null,
    email: null,
  },
  isSignedIn: false,
  token: null,
  loading: false,
  error: false,
};

const authSlice = createSlice({
  name: "auth",

  initialState: INITIAL_STATE,
  extraReducers: (builder) =>
    builder

      .addCase(register.fulfilled, (state, action) => {
        state.isSignedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.loading = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isSignedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.loading = false;
      })
      .addCase(logout.fulfilled, () => {
        return INITIAL_STATE;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isSignedIn = true;
        state.user = action.payload;
      })
      .addMatcher(
        isAnyOf(
          register.pending,
          login.pending,
          refreshUser.pending,
          logout.pending
        ),
        (state) => {
          state.loading = true;
          state.error = false;
        }
      )
      .addMatcher(
        isAnyOf(
          register.rejected,
          login.rejected,
          refreshUser.rejected,
          logout.rejected
        ),
        (state) => {
          state.loading = false;
          state.error = true;
        }
      ),
});

const authReducer = authSlice.reducer;

// export const selectContacts = (state) => state.contacts.items;
// export const selectIsLoading = (state) => state.contacts.loading;
// export const selectError = (state) => state.contacts.error;

// export const selectVisibleContacts = createSelector(
//   [selectContacts, selectNameFilter],
//   (contacts, name) => {
//     return contacts
//       ? contacts.filter((contact) =>
//           contact.name.toLowerCase().includes(name.toLowerCase())
//         )
//       : [];
//   }
// );

export default authReducer;

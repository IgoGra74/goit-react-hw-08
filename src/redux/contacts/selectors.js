import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filtersSlice";

export const selectContacts = (state) => state.contacts.items;
export const selectIsLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, name) => {
    return contacts
      ? contacts.filter((contact) =>
          contact.name.toLowerCase().includes(name.toLowerCase())
        )
      : [];
  }
);

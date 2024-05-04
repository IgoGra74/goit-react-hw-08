import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";

export const selectNameFilter = (state) => state.filters.name;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, name) => {
    return contacts
      ? contacts.filter(
          (contact) =>
            contact.name.toLowerCase().includes(name.toLowerCase()) ||
            contact.number.toLowerCase().includes(name.toLowerCase())
        )
      : [];
  }
);

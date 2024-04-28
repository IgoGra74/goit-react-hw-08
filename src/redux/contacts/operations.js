import { createAsyncThunk } from "@reduxjs/toolkit";
// import { fetchContacts, addContact, deleteContact } from "../services/api";
import { instance } from "../auth/operations";

export const apiGetContacts = createAsyncThunk(
  "contacts",
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get("/contacts");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiAddContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkApi) => {
    try {
      const { data } = await instance.post("/contacts", newContact);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiDeleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkApi) => {
    try {
      const { data } = await instance.delete(`/contacts/${contactId}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

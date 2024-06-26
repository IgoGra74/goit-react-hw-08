import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../auth/operations";
import toast from "react-hot-toast";

export const apiGetContacts = createAsyncThunk(
  "contacts",
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get("/contacts");
      return data;
    } catch (error) {
      toast.error("Oops, something went wrong, please reload the page!😢");
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
      toast.error("Oops, something went wrong, please reload the page!😢");
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
      toast.error("Oops, something went wrong, please reload the page!😢");
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const contactsInstance = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

export const setToken = (token) => {
  contactsInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const clearToken = () => {
  contactsInstance.defaults.headers.common.Authorization = "";
};

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await contactsInstance.get("/contacts");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
    try {
      const { data } = await contactsInstance.post("/contacts", newContact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const { data } = await contactsInstance.delete(`/contacts/${contactId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

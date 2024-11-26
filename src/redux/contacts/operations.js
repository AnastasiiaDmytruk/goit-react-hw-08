import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
import {apiInstance} from "../instance/instance"

// export const contactsInstance = axios.create({
//   baseURL: "https://connections-api.goit.global/",
// });

export const setToken = (token) => {
  apiInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const clearToken = () => {
  apiInstance.defaults.headers.common.Authorization = "";
};

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await apiInstance.get("/contacts");
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
      const { data } = await apiInstance.post("/contacts", newContact);
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
      const { data } = await apiInstance.delete(`/contacts/${contactId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

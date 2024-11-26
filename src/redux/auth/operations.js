import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiInstance } from "../instance/instance";

export const setToken = (token) => {
  apiInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  apiInstance.defaults.headers.common.Authorization = "";
};

export const apiRegisterUser = createAsyncThunk(
  "auth/register",
  async (formData, thunkAPI) => {
    try {
      const { data } = await apiInstance.post("/users/signup", formData);
      console.log(data);
      setToken(data.token);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const apiLoginUser = createAsyncThunk(
  "auth/login",
  async (formData, thunkAPI) => {
    try {
      console.log("Auth instance headers:", apiInstance.defaults.headers);

      console.log("Login formData:", formData);
      const { data } = await apiInstance.post("/users/login", formData);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const apiGetCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue("No token provided to refresh user data");
    }

    try {
      setToken(token);
      const { data } = await apiInstance.get("/users/current");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const apiLogoutUser = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      const { data } = await apiInstance.post("/users/logout");
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

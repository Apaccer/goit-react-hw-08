import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  apiLogin,
  apiRefresh,
  apiRegister,
  setAuthHeader,
} from "../../services/api";

export const register = createAsyncThunk(
  "auth/register",
  async (newUser, thunkApi) => {
    try {
      const data = await apiRegister(newUser);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (user, thunkApi) => {
  try {
    const data = await apiLogin(user);
    setAuthHeader(data.token);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const token = state.auth.token;
      setAuthHeader(token);
      const data = await apiRefresh();
      console.log();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import Cookies from "universal-cookie";
import AxiosInstant from "../Api/AxiosInstant ";

const cookies = new Cookies();

// Fetch all users
export const getUsers = createAsyncThunk("user/getUsers", async (_, { rejectWithValue }) => {
  try {
    const response = await AxiosInstant.get("/user"); // Use AxiosInstant
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || "An error occurred");
  }
});

// Delete user by ID
export const deleteUser = createAsyncThunk("user/deleteUser", async (id) => {
  if (!id) throw new Error("User ID is required");
  await AxiosInstant.delete(`/user/${id}`); // Use AxiosInstant
  return id;
});

// Fetch user by ID
export const getUserById = createAsyncThunk("user/getUserById", async (userId, { rejectWithValue }) => {
  try {
    const response = await AxiosInstant.get(`/user/${userId}`); // Use AxiosInstant
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || "An error occurred");
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    currentUser: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle Fetch Users
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "An error occurred";
      })

      // Handle Fetch User by ID
      .addCase(getUserById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload;
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "An error occurred";
      })

      // Handle Delete User
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter((user) => user._id !== action.payload);
      });
  },
});

export default userSlice.reducer;
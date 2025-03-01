// Redux slice (userSlice.js)
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../Api/Api";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const token = cookies.get("auth_token");

// Fetch all users
export const getUsers = createAsyncThunk("user/getUsers", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${baseUrl}/user`, {
            headers: { Authorization: `Bearer ${token}` },
        });

        if (response.data.message === "Access denied. Admins only.") {
            return rejectWithValue("Access denied. Admins only.");
        }

        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "An error occurred");
    }
});

// Fetch a single user by ID
export const getUserById = createAsyncThunk("user/getUserById", async (userId, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${baseUrl}/user/${userId}`, {
            headers: { Authorization: `Bearer ${token}` },
        });

        if (response.data.message === "Access denied. Admins only.") {
            return rejectWithValue("Access denied. Admins only.");
        }

        return response.data; // Return the fetched user
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "An error occurred");
    }
});

// Delete user by ID
export const deleteUser = createAsyncThunk("user/deleteUser", async (id) => {
    if (!id) throw new Error("User ID is required");
    await axios.delete(`${baseUrl}/user/${id}`);
    return id;
});


const userSlice = createSlice({
    name: "user",
    initialState: {
        users: [],
        currentUser: null, // New state to store the current user
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
                state.error = action.error.message;
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
                state.error = action.error.message;
            })

            // Handle Delete User
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.users = state.users.filter(user => user._id !== action.payload);
            });
    },
});

export default userSlice.reducer;
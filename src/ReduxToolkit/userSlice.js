import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../Api/Api";


// Fetch all users
export const getUsers = createAsyncThunk("user/getUsers", async () => {
    const response = await axios.get(`${baseUrl}/user`);
    return response.data;
});

export const updateUser = createAsyncThunk("user/updateUser", async ({ id, updatedData }) => {
    const response = await axios.put(`${baseUrl}/user/${id}`, updatedData);
    return response.data;
});

// Delete user by ID
export const deleteUser = createAsyncThunk("user/deleteUser", async (id) => {
    if (!id) throw new Error("User ID is required"); // إضافة حماية ضد القيم غير الصحيحة
    await axios.delete(`${baseUrl}/user/${id}`);
    return id;
});


const userSlice = createSlice({
    name: "user",
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    reducers: {}, // No need for manual reducers here

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

            // Handle Update User
            .addCase(updateUser.fulfilled, (state, action) => {
                state.users = state.users.map(user =>
                    user._id === action.payload._id ? action.payload : user
                );
            })

            // Handle Delete User
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.users = state.users.filter(user => user._id !== action.payload);
            });
    },
});

export default userSlice.reducer;

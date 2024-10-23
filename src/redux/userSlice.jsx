import { createSlice} from "@reduxjs/toolkit";
import {getUserData} from "../api/getUserData.jsx";

const userSlice = createSlice({
    name: "user",
    initialState: {
        data: null,
        isLoading: false,
        error: null,
    },
    reducers: {
        logout: (state) => {
            state.data = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUserData.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getUserData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload.body;
            })
            .addCase(getUserData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
})

export const {logout} = userSlice.actions;
export default  userSlice.reducer;


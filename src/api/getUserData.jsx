import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserData = createAsyncThunk(
    'data',
    async ({email, password}, thunkAPI) => {
        try {
            const response = await axios.post("http://192.168.1.111:3001/api/v1/user/login", {email, password});
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export default getUserData;

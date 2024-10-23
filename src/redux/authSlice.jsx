import { createSlice} from "@reduxjs/toolkit";
import loginUser from "../api/getUserLogin.jsx";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: null,
        isLoading: false,
        error: null,
    },
    reducers: {
        setCredentials: (state, action) => {
            const { token } = action.payload;
            state.token = token;
        },
        logout: (state) => {
            state.token = null;
            localStorage.removeItem('token');
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.token = action.payload.body.token;
                localStorage.setItem('token', action.payload.body.token);
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
})

export const {logout, setCredentials} = authSlice.actions;
export default  authSlice.reducer;


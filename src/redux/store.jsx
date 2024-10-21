import {configureStore} from "@reduxjs/toolkit";
import authSlice, {setCredentials} from "./authSlice.jsx";

export const store = configureStore({
    reducer: {
        auth: authSlice,
    }
})

const token = localStorage.getItem('token');
if (token) {
    store.dispatch(setCredentials({token}))
}

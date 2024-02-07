import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../services/authService.js";

const initialState = {
    status: "VOID",
    isConnected: false,
    token: null,
    error: null,
}

export const createLoginForm = createAsyncThunk(
    "LoginForm/create",
    async ({ token, message }) => {
      const res = await authService.create({ "token", "message" });
      return res.data;
    }
  );

export const loginFormSlice = createSlice({
    name: 'loginForm',
    initialState,
    reducers: {
        authReducer
    },
    extraReducers: {

    }
});

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT";

export default loginFormSlice.reducer;

/* Authentication actions 

export const loginSuccess = (token) => {
    return {
        type: LOGIN_SUCCESS,
        payload: token,
    }
}
export const loginFailed = (error) => {
    return {
        type: LOGIN_FAIL,
        payload: error,
    }
}
export const logout = () => {
    return {
        type: LOGOUT,
    }
} 
*/

/* Authentification reducer 
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                status: "SUCCEEDED",
                isConnected: true,
                token: action.payload,
                error: null
            }

        case LOGIN_FAIL: {
            return {
                ...state,
                status: "FAILED",
                isConnected: false, 
                error: action.payload
            }
        }
        case LOGOUT: {
            return initialState;
        }
        default:
            return state;
    }
}
*/
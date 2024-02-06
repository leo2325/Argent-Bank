/*import { createSlice } from '@reduxjs/toolkit'


 Authent
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

/* Authentification reducer */
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
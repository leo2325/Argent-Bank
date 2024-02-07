import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "../services/userService.js";
import authService from "../services/authService.js";

const initialState = {
    status: 'VOID',
    userData: {}
}

export const createNav = createAsyncThunk(
    "Nav/create",
    async ({ , }) => {
      const res = await userService.create({ "", "" });
      return res.data;
    }
  );

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        userReducer
    },
    extraReducers: {

    }
});

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";

export const GET_USERPROFILE = "GET_USERPROFILE"
export const EDIT_USERNAME = "EDIT_USERNAME"
export const EDIT_FIRSTNAME = "EDIT_USERNAME"
export const EDIT_LASTNAME = "EDIT_USERNAME"
export const EDIT_USERDATA = "EDIT_USERNAME"

export default loginFormSlice.reducer;

/* Authentication actions 

/* User data recovery action
export const getUserProfile = (userData) => {
    return {
        type: GET_USERPROFILE,
        payload: userData,
    }
}

/* Username update action
export const updateUsername = (username) => {
    return {
        type: EDIT_USERNAME,
        payload: username,
    }
} 

/* firstName update action 
export const updateFirstName = (firstName) => {
    return {
        type: EDIT_FIRSTNAME,
        payload: { firstName },
    }
}
/* lastName update action
export const updateLastName = (lastName) => {
    return {
        type: EDIT_LASTNAME,
        payload: { lastName },
    }
}
/* userData update action
export const updateUserData = (userData) => {
    return {
        type: EDIT_USERDATA,
        payload: { userData },
    }
}
*/

/* Authentification reducer 
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGOUT: {
            return initialState;
        }
        default:
            return state;
    }
}

/* User reducer
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERPROFILE:
            return {
                ...state,
                status: 'SUCCEEDED',
                userData: action.payload
            }
        case EDIT_USERNAME:
            return {
                ...state,
                status: "MODIFIED",
                userData: {
                    ...state.userData,
                    username: action.payload
                }
            }
        case EDIT_FIRSTNAME:
            return {
                ...state,
                status: "MODIFIED",
                userData: {
                    ...state.userData,
                    firstname: action.payload
                }
            }
        case EDIT_LASTNAME:
            return {
                ...state,
                status: "MODIFIED",
                userData: {
                    ...state.userData,
                    lastname: action.payload
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
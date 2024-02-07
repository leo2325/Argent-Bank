import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "../services/userService.js";


/* Initial user state */
const initialState = {
    status: 'VOID',
    userData: {}
}


export const createUser = createAsyncThunk(
    "User/create",
    async ({ , }) => {
      const res = await userService.create({ "", "" });
      return res.data;
    }
  );

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userReducer
    },
    extraReducers: {

    }
});


export const GET_USERPROFILE = "GET_USERPROFILE"
export const EDIT_USERNAME = "EDIT_USERNAME"
export const EDIT_FIRSTNAME = "EDIT_USERNAME"
export const EDIT_LASTNAME = "EDIT_USERNAME"
export const EDIT_USERDATA = "EDIT_USERNAME"





/* user actions

export const getUserProfile = (userData) => {
    return {
        type: GET_USERPROFILE,
        payload: userData,
    }
}

/*
export const updateUsername = (username) => {
    return {
        type: EDIT_USERNAME,
        payload: username,
    }
} 

/*
export const updateFirstName = (firstName) => {
    return {
        type: EDIT_FIRSTNAME,
        payload: { firstName },
    }
}
/*
export const updateLastName = (lastName) => {
    return {
        type: EDIT_LASTNAME,
        payload: { lastName },
    }
}
/*
export const updateUserData = (userData) => {
    return {
        type: EDIT_USERDATA,
        payload: { userData },
    }
}
*/




/* user reducer

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
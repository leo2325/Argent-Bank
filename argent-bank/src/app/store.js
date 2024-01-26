import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../actions/authActions";
import { GET_USERPROFILE, EDIT_USERNAME, EDIT_FIRSTNAME, EDIT_LASTNAME } from "../actions/userActions";

// Auth reducer
const authInitialState = {
    status: "VOID",
    isConnected: false,
    token: null,
    error: null,
};

const authReducer = (state = authInitialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                status: "SUCCEEDED",
                isConnected: true,
                token: action.payload,
                error: null,
            };
        case LOGIN_FAIL:
            return {
                ...state,
                status: "FAILED",
                isConnected: false,
                error: action.payload,
            };
        case LOGOUT: {
            return authInitialState;
        }
        default:
            return state;
    }
};

// User reducer
const userInitialState = {
    status: 'VOID',
    userData: {}
};

const userReducer = (state = userInitialState, action) => {
    switch (action.type) {
        case GET_USERPROFILE:
            return {
                ...state,
                status: 'SUCCEEDED',
                userData: action.payload,
            };
        case EDIT_USERNAME:
            return {
                ...state,
                status: "MODIFIED",
                userData: {
                    ...state.userData,
                    username: action.payload,
                },
            };
            case EDIT_FIRSTNAME:
                return {
                    ...state,
                    status: "MODIFIED",
                    userData: {
                        ...state.userData,
                        username: action.payload,
                    },
                };
            case EDIT_LASTNAME:
                return {
                    ...state,
                    status: "MODIFIED",
                    userData: {
                    ...state.userData,
                    username: action.payload,
                    },
                };
        case LOGOUT: {
            return userInitialState;
        }
        default:
            return state;
    }
};

// Combine reducers
const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
});

// Create store
export const store = configureStore({
    reducer: rootReducer,
});
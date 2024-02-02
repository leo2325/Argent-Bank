import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../reducers/authReducer";
import { userReducer } from "../reducers/userReducer";

// Combine reducers
const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
});

// Create store
export const store = configureStore({
    reducer: rootReducer,
});
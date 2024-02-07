import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authReducer } from '../redux/reducers/authReducer';
import { userReducer } from '../redux/reducers/userReducer';

// Combine reducers
const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

// Create store
export const store = configureStore({
  reducer: rootReducer,
});
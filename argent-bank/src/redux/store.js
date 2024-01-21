import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './reducers/auth.reducer.jsx';

const rootReducer = combineReducers({
   auth: authReducer,
})

const store = configureStore({
    reducer: rootReducer,
    devTools: true 
})

export default store
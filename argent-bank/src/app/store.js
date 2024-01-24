import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../actions/authActions";

let state = {
    value: null,
    list: []
  };

/* état initial d'authentification */
const initialState = {
    status: "VOID",
    isConnected: false,
    token: null,
    error: null,
}

  const reducer = ( state = initialState, action ) => {

    switch (action.type) {
    
        case LOGIN_SUCCESS:
            return {
                ...state, 
                status: "SUCCEEDED",
                isConnected: true,
                token: action.payload,
                error: null
            }
        
        case LOGIN_FAIL:
            return {
                ...state,
                status: "FAILED",
                isConnected: false,
                error: action.payload
            }

        case LOGOUT: {
            return initialState;
        }

        default:
            return state;
    }
  }
  
  export const store = configureStore(
    {
      preloadedState: state,
      reducer: combineReducers({
      })
    }
  )
import { GET_USERPROFILE, EDIT_FIRSTNAME, EDIT_LASTNAME } from "../actions/userActions.jsx"
import { LOGOUT } from "../actions/authActions.jsx"

/* Initial user state */
const initialState = {
    status: 'VOID',
    userData: {}
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERPROFILE:
            return {
                ...state,
                status: 'SUCCEEDED',
                userData: action.payload
            }
        case EDIT_FIRSTNAME:
            return {
                ...state,
                status: "MODIFIED",
                userData: {
                    ...state.userData,
                    firstname: action.payload.firstName
                }
            }
        case EDIT_LASTNAME:
            return {
                ...state,
                status: "MODIFIED",
                userData: {
                    ...state.userData,
                    lastname: action.payload.lastName
                }
            }
        case LOGOUT: {
            return initialState;
        }
        default:
            return state;
    }
}
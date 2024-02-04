import { getUserProfile, updateUsername } from "../../actions/userActions";
import { userReducer } from "../../reducers/userReducer.jsx";

export async function userService(store, token, method) {
    const status = selectUser(store.getState()).user_status;
    const firstName = selectUser(store.getState()).user.firstName;
    const lastName = selectUser(store.getState()).user.lastName;
    if (status === 'pending' || status === 'updating') {
        return;
    }
    store.dispatch(userFetching());
    
}
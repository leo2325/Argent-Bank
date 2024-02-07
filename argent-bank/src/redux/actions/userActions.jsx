export const GET_USERPROFILE = "GET_USERPROFILE"
export const EDIT_USERNAME = "EDIT_USERNAME"
export const EDIT_FIRSTNAME = "EDIT_USERNAME"
export const EDIT_LASTNAME = "EDIT_USERNAME"
export const EDIT_USERDATA = "EDIT_USERNAME"

/* User data recovery action */
export const getUserProfile = (userData) => {
    return {
        type: GET_USERPROFILE,
        payload: userData,
    }
}

/* Username update action */
export const updateUsername = (username) => {
    return {
        type: EDIT_USERNAME,
        payload: username,
    }
} 

/* firstName update action */
export const updateFirstName = (firstName) => {
    return {
        type: EDIT_FIRSTNAME,
        payload: { firstName },
    }
}
/* lastName update action */
export const updateLastName = (lastName) => {
    return {
        type: EDIT_LASTNAME,
        payload: { lastName },
    }
}
/* userData update action */
export const updateUserData = (userData) => {
    return {
        type: EDIT_USERDATA,
        payload: { userData },
    }
}
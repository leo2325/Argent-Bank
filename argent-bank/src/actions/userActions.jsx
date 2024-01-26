export const GET_USERPROFILE = "GET_USERPROFILE"
export const EDIT_FIRSTNAME = "EDIT_FIRSTNAME"
export const EDIT_LASTNAME = "EDIT_LASTNAME"

/* User data recovery action */
export const userProfile = (userData) => {
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
/* Fristname update action */
export const updateFirstname = (firstname) => {
    return {
        type: EDIT_FIRSTNAME,
        payload: firstname,
    }
}
/* Lastname update action */
export const updateLastname = (lastname) => {
    return {
        type: EDIT_LASTNAME,
        payload: firstname,
    }
}
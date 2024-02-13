export const GET_USERPROFILE = "GET_USERPROFILE"
export const EDIT_FIRSTNAME = "EDIT_FIRSTNAME"
export const EDIT_LASTNAME = "EDIT_LASTNAME"

/* User data recovery action */
export const getUserProfile = (userData) => {
    return {
        type: GET_USERPROFILE,
        payload: userData,
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
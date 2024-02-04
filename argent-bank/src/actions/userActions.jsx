export const GET_USERPROFILE = "GET_USERPROFILE"
export const EDIT_USERNAME = "EDIT_USERNAME"

/* User data recovery action */
export const getUserProfile = (userData) => {
    return {
        type: GET_USERPROFILE,
        payload: userData,
    }
}
/* Username update action */
export const updateUsername = (firstName, lastName) => {
    return {
        type: EDIT_USERNAME,
        payload: { firstName, lastName },
    }
}
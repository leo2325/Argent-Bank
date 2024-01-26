export const isValidEmail = (email) => {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
};


export const isValidName = (name) => {
    const regex = /^[a-zA-Z]+(?:[-']?[a-zA-Z]+)*$/;
    return regex.test(name);
};
export const authenticateUser = (user) => {
    return {
        type: "AUTHENTICATE_USER",
        payload: {user}
    }
}
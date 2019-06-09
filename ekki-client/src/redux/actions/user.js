export const fetchUser = (userId) => {
    return {
        type: 'FETCH_USER',
        payload: {userId}
    }
}
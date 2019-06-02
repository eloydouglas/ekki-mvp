export const FETCH_USER_DATA = 'FETCH_USER_DATA';
export const RECEIVE_USER_DATA = 'RECEIVE_USER_DATA';
export const FETCH_ACCOUNT_DATA = 'FETCH_ACCOUNT_DATA';


export const fetchUserData = (userId) => {
    return {
            type: FETCH_USER_DATA,
            userId
        }
}

export const fetchAccountData = (userId) => {
    return {
        type: FETCH_ACCOUNT_DATA,
        userId
    }
}
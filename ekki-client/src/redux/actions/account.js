// export const FETCH_ACCOUNT_BEGIN = 'FETCH_ACCOUNT_BEGIN';
// export const FETCH_ACCOUNT_SUCCESS = 'FETCH_ACCOUNT_SUCCESS';
// export const FETCH_ACCOUNT_FAILURE = 'FETCH_ACCOUNT_FAILURE';

// const fetchAccount = (userId) => {
//     return dispatch => {
//         dispatch(fetchAccountBegin())
//         return fetch(`http://localhost:4266/accounts/${userId}`)
//         .then(res => res.json())
//         .then(json => {
//             dispatch(fetchAccountSuccess(json));
//         })
//         .catch(err => dispatch(fetchAccountFailure(err)));
//     };
// };

// const fetchAccountBegin = () => {
//     return {
//             type: FETCH_ACCOUNT_BEGIN,
//         };
// };

// const fetchAccountSuccess = account => {
//     return {
//             type: FETCH_ACCOUNT_SUCCESS,
//             payload: {account}
//         };
// };

// const fetchAccountFailure = err => {
//     return {
//             type: FETCH_ACCOUNT_BEGIN,
//             payload: {err}
//         };
// };

// export const fetchAccountIfNeeded = (userId) => (dispatch, getState) =>{
//     if(getState().account.shouldFetch){
//         return dispatch(fetchAccount(userId));
//     }
// };

export const fetchAccount = (userId) => {
    return {
        type: 'FETCH_ACCOUNT',
        payload: {userId}
    }
}

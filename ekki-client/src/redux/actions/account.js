export const FETCH_ACCOUNT_BEGIN = 'FETCH_ACCOUNT_BEGIN';
export const FETCH_ACCOUNT_SUCCESS = 'FETCH_ACCOUNT_SUCCESS';
export const FETCH_ACCOUNT_FAILURE = 'FETCH_ACCOUNT_FAILURE';

export const SHOULD_FETCH_ACCOUNT = 'SHOULD_FETCH_ACCOUNT';

export const fetchAccount = (user_id) => {
    return dispatch => {
        dispatch(fetchAccountBegin())
        return fetch(`http://localhost:4266/accounts/${user_id}`)
        .then(res => res.json())
        .then(json => {
            dispatch(fetchAccountSuccess(json));
        })
        .catch(err => dispatch(fetchAccountFailure(err)));
    };
};

export const fetchAccountBegin = () => {
    return {
            type: FETCH_ACCOUNT_BEGIN,
        };
};

export const fetchAccountSuccess = account => {
    return {
            type: FETCH_ACCOUNT_SUCCESS,
            payload: {account}
        }
}

export const fetchAccountFailure = err => {
    return {
            type: FETCH_ACCOUNT_BEGIN,
            payload: {err}
        };
};

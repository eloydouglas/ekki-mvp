export const FETCH_USER_BEGIN = 'FETCH_USER_BEGIN';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

export const SHOULD_FETCH_USER = 'SHOULD_FETCH_USER';

export const fetchUser = (user_id) => {
    return dispatch => {
        dispatch(fetchUserBegin())
        return fetch(`http://localhost:4266/users/${user_id}`)
        .then(res => res.json())
        .then(json => {
            dispatch(fetchUserSuccess(json));
        })
        .catch(err => dispatch(fetchUserFailure(err)));
    };
};

export const fetchUserBegin = () => {
    return {
            type: FETCH_USER_BEGIN,
        };
};

export const fetchUserSuccess = user => {
    return {
            type: FETCH_USER_SUCCESS,
            payload: {user}
        }
}

export const fetchUserFailure = err => {
    return {
            type: FETCH_USER_BEGIN,
            payload: {err}
        };
};

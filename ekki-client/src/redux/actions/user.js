export const FETCH_USER_BEGIN = 'FETCH_USER_BEGIN';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

export const UPDATE_USER_BEGIN = 'UPDATE_USER_BEGIN';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';

const fetchUser = (userId) => {
    return dispatch => {
        dispatch(fetchUserBegin())
        return fetch(`http://localhost:4266/users/${userId}`)
        .then(res => res.json())
        .then(json => {
            dispatch(fetchUserSuccess(json));
        })
        .catch(err => dispatch(fetchUserFailure(err)));
    };
};

const fetchUserBegin = () => {
    return {
            type: FETCH_USER_BEGIN,
        };
};

const fetchUserSuccess = user => {
    return {
            type: FETCH_USER_SUCCESS,
            payload: {user}
        };
};

const fetchUserFailure = err => {
    return {
            type: FETCH_USER_BEGIN,
            payload: {err}
        };
};

export const updateUser = user => {
    return dispatch => {
        dispatch(updateUserBegin())
        return fetch(`http://localhost:4266/users/${user._id}`, {
            method: "PATCH",
            body: JSON.stringify(user),
            headers: { "Content-Type": "application/json" }
        })
        .then(res => res.json())
        .then(json => {
            console.log(json);
            dispatch(updateUserSuccess(json));
        })
        .catch(err => dispatch(updateUserFailure(err)));
    };
}

const updateUserBegin = () => {
    return {
        type: UPDATE_USER_BEGIN
    };
};

const updateUserSuccess = user => {
    return {
        type: UPDATE_USER_SUCCESS,
        payload: {user}
    };
};

const updateUserFailure = err => {
    return {
        type: UPDATE_USER_FAILURE,
        payload: {err}
    };
};

export const fetchUserIfNeeded = (userId) => (dispatch, getState) => {
    if (getState().user.shouldFetch) {
      return dispatch(fetchUser(userId))
    }
}
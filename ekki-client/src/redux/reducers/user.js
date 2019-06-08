import * as userActions from '../actions/user';

const INITIAL_USER_STATE = {
    data: {
        name: ''
    },
    fetching: false,
    shouldFetch: true,
    error: null
}

const user = (state = INITIAL_USER_STATE, action) => {
    switch(action.type){
        case userActions.FETCH_USER_BEGIN: {
            return { ...state, fetching: true, shouldFetch: false, error: null}
        }
        case userActions.FETCH_USER_SUCCESS:{
            return {...state, data: action.payload.user, fetching: false}
        }
        case userActions.FETCH_USER_FAILURE:{
            return {...state, error: action.payload.error, loading: false}
        }
        default: {
            return state;
        }
    }
}

export default user;
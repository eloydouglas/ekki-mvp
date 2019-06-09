const INITIAL_USER_STATE = {
    data: null,
    fetching: false,
    error: null
};

const user = (state = INITIAL_USER_STATE, action) => {
    switch(action.type){
        case 'FETCH_USER_BEGIN': {
            return { ...state, fetching: true, error: null}
        }
        case 'FETCH_USER_SUCCESS':{
            return {...state, data: action.payload.user, fetching: false}
        }
        case 'FETCH_USER_FAILURE':{
            return {...state, error: action.payload.error, fetching: false}
        }
        case 'UPDATE_USER_BEGIN': {
            return { ...state, fetching: true, error: null}
        }
        case 'UPDATE_USER_SUCCESS':{
            return {...state, data: action.payload.user, fetching: false}
        }
        case 'UPDATE_USER_FAILURE':{
            return {...state, error: action.payload.error, fetching: false}
        }
        default: {
            return state;
        }
    }
}

export default user;
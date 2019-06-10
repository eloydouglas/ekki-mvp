const INITIAL_STATE = {
    data: null,
    fetching: false,
    error: null,
    shouldFetch: true
};

const activity = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'FETCH_ACTIVITY_BEGIN': {
            return { ...state, fetching: true, shouldFetch: false, error: null}
        }
        case 'FETCH_ACTIVITY_SUCCESS':{
            return {data: action.payload.activity, fetching: false}
        }
        case 'FETCH_ACTIVITY_FAILURE':{
            return {...state, error: action.payload.error, fetching: false}
        }
        default: {
            return state;
        }
    };   
};

export default activity;
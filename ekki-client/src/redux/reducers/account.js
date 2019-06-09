const INITIAL_ACCOUNT_STATE = {
    data: null,
    fetching: false,
    error: null
};

const account = (state = INITIAL_ACCOUNT_STATE, action) => {
    switch(action.type){
        case 'FETCH_ACCOUNT_BEGIN': {
            return { ...state, fetching: true, error: null}
        }
        case 'FETCH_ACCOUNT_SUCCESS':{
            return {...state, data: action.payload.account, fetching: false}
        }
        case 'FETCH_ACCOUNT_FAILURE':{
            return {...state, error: action.payload.error, fetching: false}
        }
        default: {
            return state;
        }
    };   
};

export default account;
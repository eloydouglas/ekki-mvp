import * as accountActions from '../actions/account';

const INITIAL_ACCOUNT_STATE = {
    data:{
        balance: ''
    },
    fetching: false,
    shouldFetch: true,
    error: null
}

const account = (state = INITIAL_ACCOUNT_STATE, action) => {
    switch(action.type){
        case accountActions.FETCH_ACCOUNT_BEGIN: {
            return { ...state, fetching: true, shouldFetch: false, error: null}
        }
        case accountActions.FETCH_ACCOUNT_SUCCESS:{
            return {...state, data: action.payload.account, fetching: false}
        }
        case accountActions.FETCH_ACCOUNT_FAILURE:{
            return {...state, error: action.payload.error, loading: false}
        }
        default: {
            return state;
        }
    }   
}

export default account;
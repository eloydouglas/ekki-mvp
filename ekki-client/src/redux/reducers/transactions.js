const INITIAL_STATE = {
    data: null,
    fetching: false,
    error: null
};

const transactions = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'CREATE_TRANSACTION_BEGIN':{
            return { ...state, fetching: true };
        }
        case 'CREATE_TRANSACTION_SUCCESS':{
            return { ...state, data: action.payload.transaction, fetching: false };
        }
        case 'CREATE_TRANSACTION_FAILURE':{
            return { ...state, error: action.payload.error, fetching: false };
        }
        default: return state;
    }
}

export default transactions;
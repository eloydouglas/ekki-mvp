const INITIAL_CONTACTS_STATE = {
    data: null,
    fetching: false,
    error: null,
    fetched: false,
    created: false
};

const contacts = (state = INITIAL_CONTACTS_STATE, action) => {
    switch(action.type){
        case 'FETCH_CONTACTS_BEGIN': {
            return { ...state, fetching: true, error: null}
        }
        case 'FETCH_CONTACTS_SUCCESS':{
            return {...state, data: action.payload.contacts, fetching: false, fetched: true}
        }
        case 'FETCH_CONTACTS_FAILURE':{
            return {...state, error: action.payload.error, fetching: false, fetched: true}
        }
        case 'CREATE_CONTACT_BEGIN':{
            return {...state, created: false, fetching: true}
        }
        case 'CREATE_CONTACT_SUCCESS':{
            return {...state, error: null, created: true ,fetched: false, fetching: false}
        }
        case 'CREATE_CONTACT_FAILURE':{
            return {...state, error: action.payload.error, created: false,fetching: false}
        }
        default:
            return state;
    };  
};

export default contacts;
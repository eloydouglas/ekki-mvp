import * as contactsActions from '../actions/contacts';

const INITIAL_CONTACTS_STATE = {
    data: [
    ],
    fetching: false,
    shouldFetch: true,
    error: null,
    shouldGoTo: false,
    contact: null
};

const contacts = (state = INITIAL_CONTACTS_STATE, action) => {
    switch(action.type){
        case contactsActions.FETCH_CONTACTS_BEGIN: {
            return { ...state, fetching: true, shouldFetch: false, error: null}
        }
        case contactsActions.FETCH_CONTACTS_SUCCESS:{
            return {...state, data: action.payload.contacts, shouldFetch: false, shouldGoTo: true, fetching: false}
        }
        case contactsActions.FETCH_CONTACTS_FAILURE:{
            return {...state, error: action.payload.error, fetching: false}
        }
        case contactsActions.CREATE_CONTACT_BEGIN:{
            return {...state, fetching: true}
        }
        case contactsActions.CREATE_CONTACT_SUCCESS:{
            return {...state, contact: action.payload.contact, fetching: false}
        }
        case contactsActions.CREATE_CONTACT_FAILURE:{
            return {...state, error: action.payload.error, fetching: false}
        }
        default: {
            return state;
        }
    };  
};

export default contacts;
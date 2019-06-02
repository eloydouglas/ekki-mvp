import * as actions from '../actions/contacts';

const contacts = (state = {}, action) => {
    switch(action.type){
        case actions.FETCH_USER_CONTACTS:{
            return { ...state, contacts: action.contacts };
        }
        case actions.FETCHING_DATA:{
            return { ...state, fetching: true };
        }
        case actions.RECEIVE_USER_CONTACTS:{
            return { ...state, userContacts: action.receivedContacts };
        }
        default:{
            return state;   
        } 
    }
}

export default contacts;
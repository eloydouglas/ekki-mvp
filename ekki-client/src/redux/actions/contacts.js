import { updateUser, fetchUserIfNeeded } from './user'
import user from '../reducers/user';

export const FETCH_CONTACTS_BEGIN = 'FETCH_CONTACTS_BEGIN';
export const FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS';
export const FETCH_CONTACTS_FAILURE = 'FETCH_CONTACTS_FAILURE';
export const CREATE_CONTACT_BEGIN = 'CREATE_CONTACT_BEGIN';
export const CREATE_CONTACT_SUCCESS = 'CREATE_CONTACT_SUCCESS';
export const CREATE_CONTACT_FAILURE = 'CREATE_CONTACT_FAILURE';
export const SHOULD_FETCH_CONTACTS = 'SHOULD_FETCH_CONTACTS';

export const fetchContacts = contacts => {
    return dispatch => {
        dispatch(fetchContactsBegin())
        return fetch(`http://localhost:4266/users?contacts=${JSON.stringify(contacts)}`)
        .then(res => res.json())
        .then(json => {
            console.log(json);
            dispatch(fetchContactsSuccess(json));
        })
        .catch(err => dispatch(fetchContactsFailure(err)));
    };
};
const fetchContactsBegin = () => {
    return {
            type: FETCH_CONTACTS_BEGIN,
        };
};

const fetchContactsSuccess = contacts => {
    return {
            type: FETCH_CONTACTS_SUCCESS,
            payload: {contacts}
        }
};

const fetchContactsFailure = err => {
    return {
            type: FETCH_CONTACTS_BEGIN,
            payload: {err}
        };
};

export const createContact = (contact) => {
    return (dispatch, getState) => {
        dispatch(createContactBegin())
        console.log(getState());
        return fetch("http://localhost:4266/users", {
            method: "POST",
            body: JSON.stringify(contact),
            headers: { "Content-Type": "application/json" }
        })
        .then(res => res.json())
        .then(json => {
            console.log(json);
            
            dispatch(fetchUserIfNeeded())

            // dispatch(updateUser(json.newUser._id));
            dispatch(createContactSuccess(json));
        })
        .catch(err => dispatch(createContactFailure(err)));
    }
};

const createContactBegin = () => ({
    type: CREATE_CONTACT_BEGIN   
});

const createContactSuccess = contact => ({
    type: CREATE_CONTACT_SUCCESS,
    payload: {contact}
});

const createContactFailure = err => ({
    type: CREATE_CONTACT_FAILURE,
    payload: {err}
});
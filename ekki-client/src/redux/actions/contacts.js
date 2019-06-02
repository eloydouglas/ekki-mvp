export const FETCH_USER_CONTACTS = 'FETCH_USER_CONTACTS';
export const RECEIVE_USER_DATA = 'RECEIVE_USER_DATA';

export const receiveContactsData = (receivedContacts) => {
    return {
        type: RECEIVE_USER_DATA,
        receivedContacts
    }
}

export const fetchUserContacts = (contacts) => {
    return {
        type: FETCH_USER_CONTACTS,
        contacts
    }
}
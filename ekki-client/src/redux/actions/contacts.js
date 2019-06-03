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

export const fetchContactsBegin = () => {
    return {
            type: FETCH_CONTACTS_BEGIN,
        };
};

export const fetchContactsSuccess = contacts => {
    return {
            type: FETCH_CONTACTS_SUCCESS,
            payload: {contacts}
        }
};

export const fetchContactsFailure = err => {
    return {
            type: FETCH_CONTACTS_BEGIN,
            payload: {err}
        };
};

export const createContact = () => {
    return (dispatch, getState) => {
        dispatch(createContactBegin())
        const form = getState().form;

        const contact = {
            name: form.contact.name.value,
            phone: form.contact.phone.value,
            cpf: form.contact.cpf.value
        };

        return fetch("http://localhost:4266/users", {
            method: "POST",
            body: JSON.stringify(contact)
        })
        .then(res => res.json())
        .then(json => {
            console.log(json);
            dispatch(createContactSuccess(json));
        })
        .catch(err => dispatch(createContactFailure(err)));
    }
};

export const createContactBegin = () => ({
    type: CREATE_CONTACT_BEGIN   
})

export const createContactSuccess = contact => ({
    type: CREATE_CONTACT_SUCCESS,
    payload: {contact}
})

export const createContactFailure = err => ({
    type: CREATE_CONTACT_FAILURE,
    payload: {err}
})
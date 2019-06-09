import axios from 'axios';
import { all, takeLatest, select, call, put } from 'redux-saga/effects';
import setAuthToken from '../utils/setAuthToken';

const postAuth = (user) => {
    return axios.post('/auth/signin', {id: user._id});
};

const getUser = (userId) => {
    return axios.get(`/users/${userId}`);
};

const patchUser = (user) => {
    return axios.patch(`/users/${user._id}`, {contacts: user.contacts});
};

const getAccount = (userId) => {
    return axios.get(`/accounts/${userId}`);
};

const getContacts = (contacts) => {
    return axios.get(`/users?contacts=${JSON.stringify(contacts)}`);
};

const postContact = (contact) => {
    return axios.post('/users/', {...contact});
};

/* Async Generators */

function* asyncAuthenticate(action){
    try{
        const authenticated = yield select(state => state.auth.authenticated);
        if(!authenticated){
            let response;
            if(localStorage.jwtToken){
                response = {data: { token: localStorage.jwtToken}};
            }else{
                yield put({ type: "AUTHENTICATE_USER_BEGIN"});
                response = yield call(postAuth, action.payload.user);
                yield call(setAuthToken, response.data.token);
            };
            
            yield put({ type: "AUTHENTICATE_USER_SUCCESS", payload: {authentication: {token: response.data.token}}});
        };
    }catch(err){
        yield put({ type: "AUTHENTICATE_USER_FAILURE", payload: {error: err}});
    };
};

function* asyncFetchUser(action){
    try{
        yield asyncAuthenticate({ payload:{ user:{ _id: action.payload.userId }}});
        const currentUser = yield select(state => state.user.data);
        if(!currentUser){
            yield put({ type: "FETCH_USER_BEGIN"});
            const response = yield call(getUser, action.payload.userId);
            yield put({ type: "FETCH_USER_SUCCESS", payload: {user: response.data}});
        };
    }catch(err){
        yield put({ type: "FETCH_USER_FAILURE", payload: {error: err}});
    };
};

function* asyncUpdateUser(action){
    try{
        let user = yield select(state => state.user.data);
        user.contacts.push(action.payload.newUserId);

        yield put({ type: "UPDATE_USER_BEGIN"});

        const response = yield call(patchUser, user);

        yield put({ type: "UPDATE_USER_SUCCESS", payload: { user: response.data.updatedUser }});

    }catch(err){
        yield put({ type: "UPDATE_USER_FAILURE", payload: {error: err}});
    };
}

function* asyncFetchAccount(action){
    try{
        yield asyncAuthenticate({ payload:{ user:{ _id: action.payload.userId }}});
        yield put({ type: "FETCH_ACCOUNT_BEGIN"});
        const response = yield call(getAccount, action.payload.userId);
        yield put({ type: "FETCH_ACCOUNT_SUCCESS", payload: {account: response.data}});
    }catch(err){
        yield put({ type: "FETCH_ACCOUNT_FAILURE", payload: {error: err}});
    }
};

function* asyncFetchContacts(action){
    try{
        yield put({ type: "FETCH_CONTACTS_BEGIN"});
        const response = yield call(getContacts, action.payload.contacts);
        yield put({ type: "FETCH_CONTACTS_SUCCESS", payload: { contacts: response.data }});
    }catch(err){
        yield put({ type: "FETCH_CONTACTS_FAILURE", payload: {error: err}});
    }
};

function* asyncCreateContact(action){
    try{
        yield put({ type: "CREATE_CONTACT_BEGIN"});

        const response = yield call(postContact, action.payload.contact);
        yield asyncUpdateUser({ payload:{ newUserId: response.data.newUser._id }});

        yield put({ type: "CREATE_CONTACT_SUCCESS"});

    }catch(err){
        yield put({ type: "CREATE_CONTACT_FAILURE", payload: {error: err}});
    }
};

/* Watchers */

function* watchFetchUser() {
    yield takeLatest('FETCH_USER', asyncFetchUser);
};

function* watchFetchAccount() {
    yield takeLatest('FETCH_ACCOUNT', asyncFetchAccount);
};

function* watchFetchContacts() {
    yield takeLatest('FETCH_CONTACTS', asyncFetchContacts);
};

function* watchCreateContact() {
    yield takeLatest('CREATE_CONTACT', asyncCreateContact);
};

function* watchAuthenticate() {
    yield takeLatest('AUTHENTICATE_USER', asyncAuthenticate);
};



export default function* rootSaga(){
    yield all([
        watchAuthenticate(),
        watchFetchUser(),
        watchFetchContacts(),
        watchFetchAccount(),
        watchCreateContact()
    ]);
};
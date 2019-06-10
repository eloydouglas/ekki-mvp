import axios from 'axios';
import { all, takeLatest, select, call, put } from 'redux-saga/effects';
import setAuthToken from '../utils/setAuthToken';

/* API calls */

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

const getActivity = (userId) => {
    return axios.get(`/users-transactions/${userId}`);
};

const postTransaction = (transaction) => {
    return axios.post('/users-transactions/', {...transaction});
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
};

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

function* asyncFetchActivity(){
    try{
        const currentUser = yield select(state=>state.user.data);
        if(currentUser){
            yield put({ type: "FETCH_ACTIVITY_BEGIN"});
            const response = yield call(getActivity, currentUser._id);
            yield put({ type: "FETCH_ACTIVITY_SUCCESS", payload: {activity: response.data}});
            // let senders = response.data.filter(transaction => {
            //     return (transaction.sender_id !== currentUser._id );
            // });

            // let receivers = response.data.filter(transaction => {
            //     return (transaction.receiver_id !== currentUser._id );
            // });

            // receivers = receivers.map(receiver =>  receiver.receiver_id);
            // senders = senders.map(sender =>  sender.sender_id);

            // let users = [...new Set(receivers.concat(senders))];

            // const usersData = yield call(getContacts, users);

            // const transactions = usersData.map(user => {
            //     return user.transactions = response.data.filter(transaction => {
            //         return user._id == transaction.sender_id || user._id == transaction.receiver_id; 
            //     });
            // });


            // response.data.forEach(transaction => {
            //     if(transaction.receiver_id !== currentUser._id && transaction.sender_id !== currentUser._id){

            //         if(!senders.some(sender => sender === transaction.sender_id)){

            //             console.log(transaction.sender_id)
            //             senders.push(transaction.sender_id);

            //         }else if(!receivers.some(receiver => receiver === transaction.receiver_id)){

            //             receivers.push(transaction.receiver_id);

            //         };
            //     };
            // });
            // console.log(transactions);
        }else{
            throw new Error("User not found");
        };
    }catch(err){
        yield put({ type: "FETCH_ACTIVITY_FAILURE", payload: { error: err.message}});
    }
};

function* asyncCreateTransaction(action){
    try{
        yield put({ type: "CREATE_TRANSACTION_BEGIN"});

        const response = yield call(postTransaction, action.payload.transaction);

        yield put({ type: "CREATE_TRANSACTION_SUCCESS", payload: { transaction: response.data.newTransaction } });

    }catch(err){
        yield put({ type: "CREATE_TRANSACTION_FAILURE", payload: {error: err}});
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

function* watchFetchActivity() {
    yield takeLatest('FETCH_ACTIVITY', asyncFetchActivity);
};

function* watchCreateTransaction() {
    yield takeLatest('CREATE_TRANSACTION', asyncCreateTransaction);
};


export default function* rootSaga(){
    yield all([
        watchAuthenticate(),
        watchFetchUser(),
        watchFetchContacts(),
        watchFetchAccount(),
        watchCreateContact(),
        watchFetchActivity(),
        watchCreateTransaction()
    ]);
};
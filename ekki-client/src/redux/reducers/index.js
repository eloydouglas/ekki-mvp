import { combineReducers } from 'redux';

import user from './user';
import account from './account';
import contacts from './contacts';
import auth from './auth';

const rootReducer = combineReducers({
    user,
    account,
    contacts,
    auth
})

export default rootReducer;
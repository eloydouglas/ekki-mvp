import { combineReducers } from 'redux';

import user from './user';
import account from './account';
import contacts from './contacts';

const rootReducer = combineReducers({
    user,
    account,
    contacts
})

export default rootReducer;
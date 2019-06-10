import { combineReducers } from 'redux';

import user from './user';
import account from './account';
import contacts from './contacts';
import auth from './auth';
import activity from './activity';
import transactions from './transactions';

const rootReducer = combineReducers({
    user,
    account,
    contacts,
    auth,
    activity,
    transactions
})

export default rootReducer;
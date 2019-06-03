import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';

import user from './user';
import account from './account';
import contacts from './contacts';

const rootReducer = combineReducers({
    user,
    account,
    contacts,
    form: formReducer
})

export default rootReducer;
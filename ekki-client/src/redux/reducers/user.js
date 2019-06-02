import * as userActions from '../actions/user';

const INITIAL_USER_STATE = {
    loggedUser: {
        _id: '5cf305aecd10d512aa936d55'
    },
    fetching: false
}

const user = (state = INITIAL_USER_STATE, action) => {
    switch(action.type){
        case userActions.FETCH_USER_DATA: {
            return { ...state, fetching: true}
        }
        case userActions.RECEIVE_USER_DATA:{
            return {...state, loggedUser: action.user}
        }
        default: {
            return state;
        }
    }   
}

export default user;
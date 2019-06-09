const INITIAL_STATE = {
    authenticated: false,
    data: null,
    fetching: false,
    error: null
}

const auth = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case 'AUTHENTICATE_USER_BEGIN':
            return {
                ...state,
                fetching: true
            };
        case 'AUTHENTICATE_USER_SUCCESS':
            return{
                ...state,
                data: action.payload.authentication,
                authenticated: true,
                fetching: false
            };
        case 'AUTHENTICATE_USER_FAILURE':
            return {
                ...state,
                error: action.payload.error,
                fetching: false,
                authenticated: false
            };
        default:
            return state;              
    };
};

export default auth;

const initialStore = {
    loggedIn: false,
    loading: false,
    jwtToken: '',
    message: ''
};

export default(state = initialStore, action) => {

    if (action.type === 'LOGIN') {
        return Object.assign({}, state, {
            loading: true,
            message: 'Logging in...'
        });
    }

    else if (action.type === 'LOGOUT') {
        return Object.assign({},state, {
            loggedIn: false,
            user: ''
        });
    }

    else if (action.type === 'LOGIN_SUCCESS') {
        return Object.assign({}, state, {
            loading: false,
            loggedIn: true,
            jwtToken: action.jwtToken
        });
    }

    else if (action.type === 'LOGIN_FAILURE') {
        return Object.assign({}, state, {
            loading: false,
            message: action.message
        });
    }

    return state;
};

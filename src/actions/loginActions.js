import * as apiCalls from './apiCalls';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const loginSuccess = (jwtToken) => ({
    type: LOGIN_SUCCESS,
    jwtToken
});

export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginFailure = (message) => ({
    type: LOGIN_FAILURE,
    message
});

export const LOGIN = 'LOGIN';

export const login = (user) => dispatch => {
    console.log('​-----------');
    console.log('​user', user);
    console.log('​-----------');
    
    dispatch({type: LOGIN});
    apiCalls.LogIn(dispatch, user)
        .then((response) => {
            console.log('​-------------------');
            console.log('​response', response);
            console.log('​-------------------');
            return dispatch(loginSuccess(response.authToken));
        })
        .catch(err => {
            console.log('​-------------------');
            console.log(err); 
            console.log('​-------------------');
            return dispatch(loginFailure('Nope'));
        });

};

export const LOGOUT = 'LOGOUT';

export const logout = (credentials) => ({
    type: LOGOUT
});

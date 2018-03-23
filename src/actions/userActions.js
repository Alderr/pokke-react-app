import * as ApiCalls from './apiCalls';

export const FETCH_FAIL = 'FETCH_FAIL';

export const fetchFail = (error) => ({
    type: FETCH_FAIL,
    error
});

export const LOADING = 'LOADING';

export const loading = () => ({
    type: LOADING
});

export const GETAPIKEYS_DONE = 'GETAPIKEYS_DONE';

export const getApiKeys_Done = (data) => ({
    type: GETAPIKEYS_DONE,
    data
});

export const getApiKeys = (jwtToken) => dispatch => {
    dispatch(loading());
    ApiCalls.getApiKeysData(dispatch, jwtToken)
        .then((response) => {
            console.log('​-------------------');
            console.log('​action -> getApikeys -> response', response);
            console.log('​-------------------');
            dispatch(getApiKeys_Done(response.apiKeys));
        })
        .catch((err) => {
            console.log('​-------------------');
            console.log('getapikeys -> err -> ​response', err);
            console.log('​-------------------');
        
            dispatch(fetchFail('Fail: ', err.message));
        });

};





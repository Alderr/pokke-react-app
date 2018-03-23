const initialStore = {
    loading: false,
    message: '',
    apiKeys: [],
};

export default(state = initialStore, action) => {

    if (action.type === 'LOADING') {

        return Object.assign({}, state, {
            loading: true,
        });
    }

    if (action.type === 'GETAPIKEYS_DONE') {
        console.log(action.data);
        return Object.assign({}, state, {
            message: '',
            loading: false,
            apiKeys: action.data,
        });
    }

    if (action.type === 'FETCH_FAIL') {
        console.log(action);
        console.log(action.data);
        return Object.assign({}, state, {
            loading: false,
            message: action.error
        });
    }


    return state;
};

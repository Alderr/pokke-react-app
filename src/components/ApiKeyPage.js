import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import loginGate from './requires-login-gate';

import ListItem from './ListItem.js';

import { getApiKeys, createApiKey } from '../actions/userActions';

export class ApiKeyPage extends Component {
    constructor(props){
        super(props);
    }

    componentWillMount() {
        console.log('apikey page --> mounted');
        this.props.dispatch(getApiKeys(this.props.jwtToken));
    }

    createApiKey() {
        this.props.dispatch(createApiKey(this.props.jwtToken));
    }

    createListItem(apiKey) {
        const { usage, key, _id } = apiKey;
        console.log('​-----------------------------------------------------------------');
        console.log('​ApiKeyPage -> createListItem -> usage, key, _id', usage, key, _id);
        console.log('​-----------------------------------------------------------------');
        

        return <ListItem key={_id} apiKey={key} usage={usage} id={_id} />

    }
    render() {
        let loading;
        let lists;
        if (this.props.loading) {
            loading = <h3>Loading...</h3>;
        }

        if (!this.props.loading && this.props.apiKeys.length == 0 && !this.props.message) {
            
            lists = <h2>Get an Api Key =]</h2>;
        }

        if (!this.props.loading && this.props.apiKeys.length > 0 && !this.props.message) {
            console.log('actual lists rendering');
            lists = this.props.apiKeys.map(apiKey => this.createListItem(apiKey));
        }

        let error;
        if (this.props.message) {
            error = <h3>{this.props.message}</h3>;
        }
        return(
            <section>
                <h1>
        ApiKeyPage
                </h1>
                <button onClick={() => this.createApiKey()}>Create API Key</button>
                {lists}
                {loading}
                {error}
            </section>
        );
    }
}

const mapStateToProps = Reducers => {
    return {
        loading: Reducers.userReducer.loading,
        loggedIn: Reducers.loginReducer.loggedIn,
        jwtToken: Reducers.loginReducer.jwtToken,
        apiKeys: Reducers.userReducer.apiKeys
    };
};

export default loginGate()(connect(mapStateToProps)(ApiKeyPage));

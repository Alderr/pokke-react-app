import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import loginGate from './requires-login-gate';

import { getApiKeys } from '../actions/userActions';

export class ApiKeyPage extends Component {
    constructor(props){
        super(props);
    }

    componentWillMount() {
        console.log('apikey page --> mounted');
        this.props.dispatch(getApiKeys(this.props.jwtToken));
    }
    render() {
        let loading;
        if (this.props.loading) {
            loading = <h3>Loading...</h3>;
        }

        let lists;
        if (!this.props.loading && this.props.lists && !this.props.message) {
            lists = this.props.lists.map(list => this.createListItem(list));
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
    };
};

export default loginGate()(connect(mapStateToProps)(ApiKeyPage));

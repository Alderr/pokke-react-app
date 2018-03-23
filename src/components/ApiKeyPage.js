import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import loginGate from './requires-login-gate';

export class ApiKeyPage extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <section>
                <h1>
        ApiKeyPage
                </h1>
                <button><Link to='/login'>Get Started</Link></button>
                <button><Link to='/'>Learn More!</Link></button>
            </section>
        );
    }
}

const mapStateToProps = Reducers => {
    return {
        loggedIn: Reducers.loginReducer.loggedIn,
        jwtToken: Reducers.loginReducer.jwtToken,
    };
};

export default loginGate()(connect(mapStateToProps)(ApiKeyPage));

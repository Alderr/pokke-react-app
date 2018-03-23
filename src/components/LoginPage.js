import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, focus } from 'redux-form';
import { Link, Redirect } from 'react-router-dom';

import Input from './Input';
import LoginForm from './LoginForm';

import { required, nonEmpty } from '../validators';

export class LoginPage extends Component {
    constructor(props){
        super(props);
    }

    render() {

        if (this.props.loggedIn) {
            return <Redirect to='/account/apiKeys' />;
        }

        return(
            <div>
                <h1>
                LoginPage
                </h1>
                <LoginForm message={this.props.message} />
            </div>
        );
    }
}

const mapStateToProps = Reducers => {
    return {
        loggedIn: Reducers.loginReducer.loggedIn,
        message: Reducers.loginReducer.message
    };
};

export default connect(mapStateToProps)(LoginPage);

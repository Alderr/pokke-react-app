import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';

import loginGate from './requires-login-gate';


export class MainView extends Component {

    render() {

        return(
            <div>
                <div className='sideBar'>
                    <h3><Link to='/'>Home</Link></h3>
                    <h3><Link to='/account/apiKeys'>Api Keys</Link></h3>
                    <h3><Link to='/account/Logs'>Logs</Link></h3>
                </div>
            </div>
        );
    }
}

const mapStateToProps = Reducers => {
    return {
        loggedIn: Reducers.loginReducer.loggedIn,
        loading: Reducers.userReducer.loading,
        jwtToken: Reducers.userReducer.jwtToken,
    };
};

export default loginGate()(connect(mapStateToProps)(MainView));

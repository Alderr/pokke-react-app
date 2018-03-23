import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import LoginPage from './components/LoginPage';
import MainView from './components/MainView';
import ApiKeyPage from './components/ApiKeyPage';
import LogsPage from './components/LogsPage';
import PaymentPage from './components/PaymentPage';

import './App.css';


class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route exact path='/' component={Home} />
                    <Route exact path='/login' component={LoginPage} />
                    <Route path='/account' component={MainView} />
                    <Route exact path='/account/apiKeys' component={ApiKeyPage} />
                    <Route exact path='/account/logs' component={LogsPage} />
                    <Route exact path='/account/payment' component={PaymentPage} />
                </div>
            </Router>
        );
    }
}

export default App;

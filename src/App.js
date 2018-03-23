import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import LoginPage from './components/LoginPage';
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
                    <Route exact path='/apiKey' component={ApiKeyPage} />
                    <Route exact path='/logs' component={LogsPage} />
                    <Route exact path='/payment' component={PaymentPage} />
                </div>
            </Router>
        );
    }
}

export default App;

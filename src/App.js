import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import LoginPage from './components/LoginPage';

import './App.css';
class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route exact path='/' component={Home} />
                    <Route exact path='/login' component={LoginPage} />
                </div>
            </Router>
        );
    }
}

export default App;

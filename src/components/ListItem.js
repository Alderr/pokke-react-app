import React, { Component } from 'react';
import { connect } from 'react-redux';
import loginGate from './requires-login-gate';

import { Link } from 'react-router-dom';

export class ListItem extends Component {
    constructor(props){
        super(props);
    }

    render() {
        console.log(this.props);
        console.log('--a list item---');
        return(
            <section key={this.props._id}>

                <li key={this.props._id}>
                    <p>{this.props.apiKey} Usage: {this.props.usage} Valid: True </p>
                </li>


            </section>
        );
    }
}

const mapStateToProps = Reducers => {
    return {
        jwtToken: Reducers.loginReducer.jwtToken
    };
};

export default connect(mapStateToProps)(ListItem);

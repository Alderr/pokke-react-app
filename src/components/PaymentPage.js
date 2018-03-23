import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class PaymentPage extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <section>
                <h1>
        PaymentPage
                </h1>
                <button><Link to='/login'>Get Started</Link></button>
                <button><Link to='/'>Learn More!</Link></button>
            </section>
        );
    }
}
PaymentPage
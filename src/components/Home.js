import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class Home extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        console.log(this.props);
        return(
            <section>
                <h1>
        Home
                </h1>
                <button><Link to='/login'>Get Started</Link></button>
                <button><Link to='/'>Learn More!</Link></button>
            </section>
        );
    }
}

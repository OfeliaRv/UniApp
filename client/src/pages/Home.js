import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <nav>
                <Link to="/register"><a>Register</a></Link><br/>
                <Link to="/packs"><a>Packs</a></Link>
            </nav>
        );
    }
}

export default Home;
import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory({ forceRefresh: true });

export default class Navbar extends Component {
    render() {
        return (
            <Router history={history}>
                <nav>
                    <div className="nav1">
                        <div className="nav1-content">
                            <div className="logo">
                                <img src={require('../../assets/img/logo.svg')} alt="logo" />
                            </div>
                            <div className="nav-buttons">
                                {/* <img src={require('../../assets/img/bell.svg')} alt="notifications" className="nav-button" /> */}
                                <Link to="/login" onClick={handleClick}><img src={require('../../assets/img/logout.svg')} alt="logout" className="nav-button" /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="nav2">
                        <div className="uni-logo">
                            <img src={require('../../assets/img/ufaz.png')} alt="uni-logo" />
                        </div>
                    </div>
                </nav>
            </Router>
        );
    }
}

const handleClick = e => {
    e.preventDefault();
    localStorage.clear;
    localStorage.removeItem('user-email');
    localStorage.removeItem('user-password');
    localStorage.removeItem('user-type');
    localStorage.removeItem('username');
    localStorage.removeItem('lastname');
    localStorage.removeItem('firstname');
    history.push('');
}


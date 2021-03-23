import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav>
                <div className="nav1">
                    <div className="nav1-content">
                        <div className="logo">
                            <img src={require('../../assets/img/logo.svg')} alt="logo" />
                        </div>
                        <div className="nav-buttons">
                            <img src={require('../../assets/img/bell.svg')} alt="notifications" className="nav-button"/>
                            <Link to="/" onClick={() => localStorage.clear}><img src={require('../../assets/img/logout.svg')} alt="logout" className="nav-button"/></Link>
                        </div>
                    </div>
                </div>
                <div className="nav2">
                    <div className="uni-logo">
                        <img src={require('../../assets/img/ufaz.png')} alt="uni-logo"/>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;

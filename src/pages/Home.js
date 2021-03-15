import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <Link to="/register">Register</Link><br/><Link to="/login">Login</Link><br/>
                <Link to="/packs">Pack</Link><br/>
                <Link to="/students">Students</Link><br/>
                <Link to="/teachers">Teachers</Link><br/>
                <Link to="/timetable">Timetable</Link><br/>
            </div>
        );
    }
}

export default Home;
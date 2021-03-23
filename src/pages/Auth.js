import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { createBrowserHistory } from 'history';
import axios from 'axios';
import Dashboard from './Dashboard';

const history = createBrowserHistory({ forceRefresh: true });

const Auth = () => {
    if (localStorage.getItem('user-email') !== null) {
        return (
            <div>
                <Dashboard />
            </div>
        )
    }
    else {
        return (
            <Router history={history}>
                <div className="full-page">
                    <div className="container">
                        <div className="auth-container">
                            <div className="auth-card">
                                <div className="auth-part col-md-6">
                                    <Route exact path="/" component={Login_head}></Route>
                                    <Route path="/login" component={Login_head}></Route>
                                    <Route path="/loginTeacher" component={Login_head}></Route>
                                    <Route path="/loginStudent" component={Login_head}></Route>
                                    <Route path="/register" component={Register1_head}></Route>
                                    <div id="auth">
                                        <Route exact path="/" component={Login}></Route>
                                        <Route path="/login" component={Login}></Route>
                                        <Route path="/loginTeacher" component={Login}></Route>
                                        <Route path="/loginStudent" component={Login}></Route>
                                        <Route path="/register" component={Register1}></Route>
                                    </div>
                                </div>
                                <div id="auth-pic" className="auth-part col-md-6">
                                    <div className="picture-text">
                                        <p className="desc">Hella narwhal Cosby sweater McSweeney's, salvia kitsch before they sold out High Life.</p>
                                        <div className="author">
                                            <img src={require('../assets/img/Takamaru.png')} alt="Takamaru" />
                                            <div>
                                                <p>Takamaru Ayako</p>
                                                <span>Manager an inVision</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}

export default Auth;

const registerHandler = e => {
    e.preventDefault();

    const data = {
        username: this.username,
        firstname: this.first_name,
        lastname: this.last_name,
        // university_name: this.university_name,
        email: this.email,
        password: this.password
    }

    axios.post(`auth/administrator/register`, data)
        .then(res => {
            console.log(res);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user-email', data.email);
            localStorage.setItem('user-password', data.password);
            localStorage.setItem('user-type', "Administrator");
            history.push('students');
            console.log("Admin Register Successful!");
        })
        .catch(err => {
            console.log(err);
        })
}

const Register1_head = () => {
    return (
        <div className="auth-heading">
            <div className="heading-nav">
                <p>Have an account? <Link to="/" className="link-underline">Sign In</Link></p>
            </div>
            <div className="heading-main">
                <h1>Sign up to Checkabs</h1>
                <h6>Sign up on the internal platform</h6>
            </div>
        </div>
    )
}

const Register1 = () => {
    return (
        <form className="form" onSubmit={registerHandler}>
            <div className="auth-form">
                <input type="text" name="username" placeholder="Username" onChange={e => this.username = e.target.value} required />
                <input type="text" name="firstname" placeholder="First Name" onChange={e => this.firstname = e.target.value} required />
                <input type="text" name="lastname" placeholder="Last Name" onChange={e => this.lastname = e.target.value} required />
                {/* <input type="text" name="university_name" placeholder="University Name" onChange={e => this.university_name = e.target.value} /> */}
                <input type="email" name="email" placeholder="Email" onChange={e => this.email = e.target.value} required />
                <input type="password" name="password" placeholder="Password" onChange={e => this.password = e.target.value} required />
            </div>
            <div className="check">
                <input type="checkbox" name="agreement" id="agreement" required />
                <label htmlFor="agreement"> I have read the <a className="link-underline">Terms and Conditions</a>.</label>
            </div>
            <button type="submit" className="auth-button">Sign up now</button>
        </form>
    )
}

const Login_head = () => {
    return (
        <div className="auth-heading login-heading">
            <div className="heading-nav">
                <p>New user? <Link to="/register" className="link-underline">Sign up here</Link></p>
                <Link to="/login">Administrator</Link>
                <Link to="/loginTeacher">Teacher</Link>
                <Link to="/loginStudent">Student</Link>
            </div>
            <div className="heading-main">
                <Route exact path="/">
                    <h1>Sign in as an Administrator</h1>
                </Route>
                <Route exact path="/loginTeacher">
                    <h1>Sign in as a Teacher</h1>
                </Route>
                <Route exact path="/loginStudent">
                    <h1>Sign in as a Student</h1>
                </Route>
            </div>
        </div>
    )
}

const loginHandler = e => {
    e.preventDefault();

    const data = {
        email: this.email,
        password: this.password
    }

    switch (window.location.pathname) {
        case '/loginTeacher':
            axios.post(`auth/teacher/login`, data)
                .then(res => {
                    localStorage.setItem('token', res.data.token);
                    localStorage.setItem('user-email', data.email);
                    localStorage.setItem('user-password', data.password);
                    localStorage.setItem('user-type', "Teacher");
                    // console.log(res.data.token);
                    console.log("Teacher Login Successful!");
                    history.push('students');
                })
                .catch(err => {
                    alert('Wrong email or password');
                    console.log(err);
                })
            break;

        case '/loginStudent':
            axios.post(`auth/student/login`, data)
                .then(res => {
                    localStorage.setItem('token', res.data.token);
                    localStorage.setItem('user-email', data.email);
                    localStorage.setItem('user-password', data.password);
                    localStorage.setItem('user-type', "Student");
                    // console.log(res.data.token);
                    console.log("Student Login Successful!");
                    history.push('students');
                })
                .catch(err => {
                    alert('Wrong email or password');
                    console.log(err);
                })
            break;
        default:
            axios.post(`auth/administrator/login`, data)
                .then(res => {
                    localStorage.setItem('token', res.data.token);
                    localStorage.setItem('user-email', data.email);
                    localStorage.setItem('user-password', data.password);
                    localStorage.setItem('user-type', "Administrator");
                    console.log("Admin Login Successful!");
                    history.push('students');
                })
                .catch(err => {
                    alert('Wrong email or password');
                    console.log(err);
                })
            break;
    }
}

const Login = () => {
    return (
        <form className="form" onSubmit={loginHandler}>
            <div className="auth-form">
                <input type="email" name="email" placeholder="Email" onChange={e => this.email = e.target.value} required />
                <input type="password" name="password" placeholder="Password" onChange={e => this.password = e.target.value} required />
            </div>
            <button type="submit" className="auth-button">Sign in</button>
        </form>
    )
}
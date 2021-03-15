import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

export default class Auth extends Component {
    render() {
        return (
            <Router history={history}>
                <div id="register-page" className="full-page">
                    <div className="container">
                        <div className="auth-container">
                            <div className="auth-card">
                                <div className="auth-part col-md-6">
                                    <div className="auth-heading">
                                        <div className="heading-nav">
                                            <div className="heading-back" onClick={history.goBack}>
                                                <img className="back-arrow" src={require('../assets/img/back-arrow.svg')} alt="go back" />
                                                <a>Go back</a>
                                            </div>
                                            <p>Have an account? <a className="link-underline">Sign In</a></p>
                                        </div>
                                        <div className="heading-main">
                                            <h1>Sign up to Checkabs</h1>
                                            <h6>Sign up on the internal platform</h6>
                                        </div>
                                    </div>
                                    <div id="auth">
                                        <Route path="/register" component={Register_1}></Route>
                                        <Route path="/register2" component={Register_2}></Route>
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
        );
    }
}

const routeChange = () => {
    let path = `register2`;
    history.push(path);
}

const Register_1 = () => {
    return (
        <form className="form">
            <div className="auth-form">
                <input type="text" name="full name" placeholder="Full Name" />
                <input type="text" name="university name" placeholder="University Name" />
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
            </div>
            <div className="check">
                <input type="checkbox" name="agreement" id="agreement" required />
                <label for="agreement"> I have read the <a className="link-underline">Terms and Conditions</a>.</label>
            </div>
            <button type="submit" className="auth-button" onClick={routeChange}>Sign up now</button>
        </form>
    )
}

const Register_2 = () => {
    return (
        <form className="form" action="">
            <div className="auth-form">
                <input type="text" name="position" placeholder="Verify mail" />
            </div>
            <Link to="/dashboard" className="auth-button-container"><button type="submit" className="auth-button">Submit</button></Link>
        </form>
    )
}
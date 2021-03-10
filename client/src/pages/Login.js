import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div id="login-page">
                <div className="container">
                    <div className="auth-page">
                        <div className="login-part"></div>
                        <div className="login-part col-md-6">
                            <div className="auth-container col-md-4">
                                <h1 className="auth-heading">Login to your Virtual University</h1>
                                <p>Please enter your ID number</p>
                                <input type="text" name="id_number" id="uni_id_field" placeholder="Your ID number" />
                                <button type="submit">Get started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;

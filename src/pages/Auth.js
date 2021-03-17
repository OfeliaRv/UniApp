import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { createBrowserHistory } from 'history';
// import axios from 'axios';
// import { setUserSession } from '../Utils/Common';

const history = createBrowserHistory();

const Auth = () => {
    return (
        <Router history={history}>
            <div id="register-page" className="full-page">
                <div className="container">
                    <div className="auth-container">
                        <div className="auth-card">
                            <div className="auth-part col-md-6">
                                <Route path="/login" component={Login_head}></Route>
                                <Route path="/register" component={Register1_head}></Route>
                                <Route path="/register2" component={Register2_head}></Route>
                                <div id="auth">
                                    <Route path="/login" component={Login}></Route>
                                    <Route path="/register" component={Register1}></Route>
                                    <Route path="/register2" component={Register2}></Route>
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

export default Auth;

const routeChangeRegister = () => {
    let path = `register2`;
    history.push(path);
}

// const routeChangeLogin = () => {
//     let path = `dashboard`;
//     history.push(path);
// }

const Register1_head = () => {
    return (
        <div className="auth-heading">
            <div className="heading-nav">
                <p>Have an account? <Link to="/login" className="link-underline">Sign In</Link></p>
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
            <button type="submit" className="auth-button" onClick={routeChangeRegister}>Sign up now</button>
        </form>
    )
}

const Register2_head = () => {
    return (
        <div className="auth-heading">
            <div className="heading-nav">
                <div className="heading-back" onClick={history.goBack}>
                    <img className="back-arrow" src={require('../assets/img/back-arrow.svg')} alt="go back" />
                    <a>Go back</a>
                </div>
                <p>Have an account? <Link to="/login" className="link-underline">Sign In</Link></p>
            </div>
            <div className="heading-main">
                <h1>Sign up to Checkabs</h1>
                <h6>Sign up on the internal platform</h6>
            </div>
        </div>
    )
}

const Register2 = () => {
    return (
        <form className="form" action="">
            <div className="auth-form">
                <input type="text" name="position" placeholder="Verify mail" />
            </div>
            <Link to="/dashboard" className="auth-button-container"><button type="submit" className="auth-button">Submit</button></Link>
        </form>
    )
}

const Login_head = () => {
    return (
        <div className="auth-heading">
            <div className="heading-nav">
                <p>New user? <Link to="/register" className="link-underline">Sign up here</Link></p>
            </div>
            <div className="heading-main">
                <h1>Sign in to Checkabs</h1>
            </div>
        </div>
    )
}

const sendRequestLogin = (token) => {
    const requestOptions = {
        method: 'POST',
        headers: new Headers({
            Authorization: `Bearer ${token}`,
        }, { 'Content-Type': 'application/json' })
        // headers: { 'Content-Type': 'application/json' }
    };

    fetch('https://qayib-app.herokuapp.com/auth/administrator/login', requestOptions)
        .then(response => response.json())
        .then(alert("success"))
        .then(history.push('/dashboard'))
}

// const api = axios.create({
//     baseURL: 'https://qayib-app.herokuapp.com/auth/administrator/login',
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     }
// });

// const handleLogin = (e) => {
//     e.preventDefault();
//     const [loading, setLoading] = useState(false);
//     const username = useFormInput('');
//     const password = useFormInput('');
//     const [error, setError] = useState(null);

//     setError(null);
//     setLoading(true);
//     axios.post('https://qayib-app.herokuapp.com/auth/administrator/login', { username: username.value, password: password.value }).then(response => {
//         setLoading(false);
//         alert("success");
//         setUserSession(response.data.token, response.data.user);
//         history.push('/dashboard');
//     }).catch(error => {
//         setLoading(false);
//         if (error.response.status === 401) setError(error.response.data.message);
//         else setError("Something went wrong. Please try again later.");
//     });
// }

// const useFormInput = initialValue => {
//     const [value, setValue] = useState(initialValue);

//     const handleChange = e => {
//         setValue(e.target.value);
//     }
//     return {
//         value,
//         onChange: handleChange
//     }
// }

// const sendRequestLogin = () => {
//     axios.post(`https://qayib-app.herokuapp.com/auth/administrator/login`)
//         .then(res => {
//             console.log(res.data);
//             alert("Success!");
//         })
// }

const Login = () => {
    return (
        <form className="form" onSubmit={sendRequestLogin}>
            <div className="auth-form">
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
            </div>
            <button type="submit" className="auth-button">Sign in</button>
        </form>
    )
}
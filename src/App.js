import React, { Component } from 'react';
import { Router, Switch, Route } from "react-router-dom";
import Auth from './pages/Auth';
import { Packs } from './pages/Packs';
import Dashboard from './pages/Dashboard';
import { createBrowserHistory } from 'history';
// import axios from 'axios';

const history = createBrowserHistory({ forceRefresh: true });

export default class App extends Component {
    state = {
        user: {
            email: null,
            password: null,
            fullname: null,
        },
        packs: [
            {
                id: 1,
                name: "Basic pack",
                price: "29.99$",
                features: [
                    { id: 1, feature: "Notification sounds" },
                    { id: 2, feature: "Maximum of 7 times of absence checking per subject" },
                    { id: 3, feature: "10 000 users maximum" }
                ]
            },
            {
                id: 2,
                name: "Regular pack",
                price: "49.99$",
                features: [
                    { id: 1, feature: "Notification sounds" },
                    { id: 2, feature: "Maximum of 10 times of absence checking per subject" },
                    { id: 3, feature: "15 000 users maximum" }
                ]
            },
            {
                id: 3,
                name: "Premium pack",
                price: "59.99$",
                features: [
                    { id: 1, feature: "Notification sounds" },
                    { id: 2, feature: "Custom number of times of absence checking per subject" },
                    { id: 3, feature: "Unlimited number of users" },
                    { id: 4, feature: "Teacher can check absence manually" }
                ]
            }
        ]
    }

    // componentDidMount() {
    //     localStorage.getItem('user-email');
    //     axios.get('auth/administrator/login').then(
    //         res => {
    //             console.log("from app.js", res);
    //             this.setState({
    //                 user: res.data
    //             })
    //         },
    //         err => {
    //             console.log(err);
    //         }
    //     )
    // }

    render() {
        return (
            <div className="App">
                <Router history={history}>
                    <Switch>
                        <Route exact path="/" component={() => <Auth />} />
                        <Route exact path="/loginTeacher" component={() => <Auth />} />
                        <Route exact path="/loginStudent" component={() => <Auth />} />
                        <Route exact path="/register" component={() => <Auth />} />
                        <Route exact path="/packs" component={() => <Packs packs={this.state.packs} />} />
                        <Route exact path="/students" component={() => <Dashboard user={this.state.user} />} />
                        <Route exact path="/teachers" component={() => <Dashboard user={this.state.user} />} />
                        <Route exact path="/timetable" component={() => <Dashboard user={this.state.user} />} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

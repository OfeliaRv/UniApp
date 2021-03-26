import React, { Component } from 'react';
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';
import Auth from './pages/Auth';
import { Packs } from './pages/Packs';
import Dashboard from './pages/Dashboard';
import Payment from './pages/Payment';

const history = createBrowserHistory({ forceRefresh: true });

export default class App extends Component {
    // shouldComponentUpdate() {
    //     return false;
    // }

    state = {
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

    render() {
        return (
            <div className="App">
                <Router history={history}>
                    <Switch>
                        <Route exact path="/" component={Dashboard} />
                        <Route path="/loginTeacher" component={Auth} />
                        <Route path="/loginStudent" component={Auth} />
                        <Route path="/register" component={Auth} />
                        <Route exact path="/packs" component={() => <Packs packs={this.state.packs} />} />
                        <Route exact path="/students" component={Dashboard} />
                        <Route exact path="/teachers" component={Dashboard} />
                        <Route exact path="/timetable" component={Dashboard} />
                        <Route exact path="/payment" component={Payment} />
                        <Route exact path="/addUniversity" component={Dashboard}></Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

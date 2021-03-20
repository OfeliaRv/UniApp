import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from './pages/Home';
import Auth from './pages/Auth';
import { Packs } from './pages/Packs';
import Dashboard from './pages/Dashboard';

class App extends Component {
    state = {
        packs: [
            {
                id: 1, name: "Basic pack",
                price: "29.99$",
                features: [
                    { id: 1, feature: "Notification sounds" },
                    { id: 2, feature: "Maximum of 7 times of absence checking per subject" },
                    { id: 3, feature: "10 000 users maximum" }
                ]
            },
            {
                id: 2, name: "Regular pack",
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
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/register" component={Auth} />
                        <Route path="/register2" component={Auth} />
                        <Route path="/login" component={Auth} />
                        <Route path="/packs">
                            <Packs packs={this.state.packs} />
                        </Route>
                        <Route path="/students" component={Dashboard} />
                        <Route path="/teachers" component={Dashboard} />
                        <Route path="/timetable" component={Dashboard} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;

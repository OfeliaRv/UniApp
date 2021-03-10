import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register';
import { Packs } from './pages/Packs';
import Students from './pages/Students';

class App extends Component {
    state = {
        packs: [
            {
                id: 1, name: "Basic pack", 
                price: "9.99$",
                features: [
                    { id: 1, feature: "Notification sounds" },
                    { id: 2, feature: "Maximum of 7 times of absence checking per subject" },
                    { id: 3, feature: "10 000 users maximum" }
                ]
            },
            {
                id: 2, name: "Regular pack", 
                price: "16.99$",
                features: [
                    { id: 1, feature: "Notification sounds" },
                    { id: 2, feature: "Maximum of 10 times of absence checking per subject" },
                    { id: 3, feature: "15 000 users maximum" }
                ]
            },
            {
                id: 3,
                name: "Premium pack",
                price: "19.99$",
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
                        <Route path="/register" component={Register} />
                        <Route path="/packs" >
                            <Packs packs={this.state.packs} />
                        </Route>
                        <Route path="/students" component={Students} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;

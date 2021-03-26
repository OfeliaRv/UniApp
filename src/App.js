import React, { Component } from 'react';
import { Router, Switch, Route } from "react-router-dom";
import Auth from './pages/Auth';
import { Packs } from './pages/Packs';
import Dashboard from './pages/Dashboard';
import { createBrowserHistory } from 'history';
import Payment from './pages/Payment';

const history = createBrowserHistory({ forceRefresh: true });

export default class App extends Component {
    shouldComponentUpdate() {
        return false;
    }

    constructor(props) {
        super(props)

        this.setStudents = this.setStudents.bind(this);
        this.setTeachers = this.setTeachers.bind(this);
        this.setTimeTableData = this.setTimeTableData.bind(this);

        this.state = {
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
            ],
            teachers: this.props.teachers,
            students: this.props.students,
            weekdays: this.props.weekdays
        }
    }

    setTimeTableData = (weekdays) => {
        this.setState({
            weekdays: [weekdays]
        });
        console.log(this.state.weekdays[0])
    }

    setTeachers = (teachers) => {
        this.setState({
            teachers: [teachers]
        });
        console.log(this.state.teachers[0]);
    }

    setStudents = (students) => {
        this.setState({
            students: [students]
        });
        console.log(this.state.students[0]);
    }

    render() {
        return (
            <div className="App">
                <Router history={history}>
                    <Switch>
                        <Route exact path="/" component={() => <Dashboard />} />
                        <Route path="/login" component={() => <Auth />} />
                        <Route path="/loginTeacher" component={() => <Auth />} />
                        <Route path="/loginStudent" component={() => <Auth />} />
                        <Route path="/register" component={() => <Auth />} />
                        <Route exact path="/packs" component={() => <Packs packs={this.state.packs} />} />
                        <Route exact path="/students" component={() => <Dashboard students={this.state.students} setStudents={this.setStudents} />} />
                        <Route exact path="/teachers" component={() => <Dashboard teachers={this.state.teachers} setTeachers={this.setTeachers} />} />
                        <Route exact path="/timetable" component={() => <Dashboard weekdays={this.state.weekdays} setTimeTableData={this.setTimeTableData} />} />
                        <Route exact path="/payment" component={() => <Payment />} />
                        <Route exact path="/addUniversity" component={Dashboard}></Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

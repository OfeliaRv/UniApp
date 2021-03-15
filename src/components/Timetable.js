import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Timetable extends Component {
    render() {
        return (
            <div>
                <div className="page-heading">
                    <div className="page-name">
                        <h1>Timetable</h1>
                    </div>
                    <div className="timetable-heading">

                    </div>
                </div>
                <div className="timetable-holder">
                    <table className="timetable">
                        <thead>
                            <th>Monday</th>
                            <th>Tuesday</th>
                            <th>Wednesday</th>
                            <th>Thursday</th>
                            <th>Friday</th>
                            <th>Saturday</th>
                            <th>Sunday</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <p id="subject"></p>
                                    <p id="event"></p>
                                    <p id="time"></p>
                                </td>
                                <td>
                                    <p id="subject"></p>
                                    <p id="event"></p>
                                    <p id="time"></p>
                                </td>
                                <td>
                                    <p id="subject"></p>
                                    <p id="event"></p>
                                    <p id="time"></p>
                                </td>
                                <td>
                                    <p id="subject"></p>
                                    <p id="event"></p>
                                    <p id="time"></p>
                                </td>
                                <td>
                                    <p id="subject"></p>
                                    <p id="event"></p>
                                    <p id="time"></p>
                                </td>
                                <td>
                                    <p id="subject"></p>
                                    <p id="event"></p>
                                    <p id="time"></p>
                                </td>
                                <td>
                                    <p id="subject"></p>
                                    <p id="event"></p>
                                    <p id="time"></p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p id="subject"></p>
                                    <p id="event"></p>
                                    <p id="time"></p>
                                </td>
                                <td>
                                    <p id="subject"></p>
                                    <p id="event"></p>
                                    <p id="time"></p>
                                </td>
                                <td>
                                    <p id="subject"></p>
                                    <p id="event"></p>
                                    <p id="time"></p>
                                </td>
                                <td>
                                    <p id="subject"></p>
                                    <p id="event"></p>
                                    <p id="time"></p>
                                </td>
                                <td>
                                    <p id="subject"></p>
                                    <p id="event"></p>
                                    <p id="time"></p>
                                </td>
                                <td>
                                    <p id="subject"></p>
                                    <p id="event"></p>
                                    <p id="time"></p>
                                </td>
                                <td>
                                    <p id="subject"></p>
                                    <p id="event"></p>
                                    <p id="time"></p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p id="subject"></p>
                                    <p id="event"></p>
                                    <p id="time"></p>
                                </td>
                                <td>
                                    <p id="subject"></p>
                                    <p id="event"></p>
                                    <p id="time"></p>
                                </td>
                                <td>
                                    <p id="subject"></p>
                                    <p id="event"></p>
                                    <p id="time"></p>
                                </td>
                                <td>
                                    <p id="subject"></p>
                                    <p id="event"></p>
                                    <p id="time"></p>
                                </td>
                                <td>
                                    <p id="subject"></p>
                                    <p id="event"></p>
                                    <p id="time"></p>
                                </td>
                                <td>
                                    <p id="subject"></p>
                                    <p id="event"></p>
                                    <p id="time"></p>
                                </td>
                                <td>
                                    <p id="subject"></p>
                                    <p id="event"></p>
                                    <p id="time"></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

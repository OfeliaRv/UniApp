import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from '../components/layout/Navbar';
import Timetable from '../components/Timetable';
import axios from 'axios';

export default class Dashboard extends Component {
    componentDidMount() {
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }

        axios.get('login', config).then(
            res => {
                console.log(res);
            },
            err => {
                console.log(err);
            }
        )
    }

    render() {
        return (
            <Router>
                <Navbar />
                <div className="dashboard">
                    <div className="left-navigator">
                        <div className="user-profile">
                            <div className="user-picture">
                                <img src="" alt="" />
                            </div>
                            <div className="user-info">
                                <h6 className="user-fullname">Nigar Yusifzada</h6>
                                <p className="user-position">Administration</p>
                            </div>
                        </div>
                        <ul className="selector-buttons">
                            <hr />
                            <li><Link to="/students">
                                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0ZM10 4C10 2.9 9.1 2 8 2C6.9 2 6 2.9 6 4C6 5.1 6.9 6 8 6C9.1 6 10 5.1 10 4ZM14 14C13.8 13.29 10.7 12 8 12C5.31 12 2.23 13.28 2 14H14ZM0 14C0 11.34 5.33 10 8 10C10.67 10 16 11.34 16 14V16H0V14Z" fill="#66788A" />
                                </svg>
                                <p>Students</p>
                            </Link></li>
                            <li><Link to="/teachers">
                                <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="14">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.11336 7C8.95237 7 10.4484 5.50402 10.4484 3.665C10.4484 1.82599 8.95237 0.330002 7.11336 0.330002C5.27435 0.330002 3.77836 1.82599 3.77836 3.665C3.77836 5.50402 5.27435 7 7.11336 7ZM0.443359 12.0025C0.443359 9.78234 4.88367 8.6675 7.11336 8.6675C9.34305 8.6675 13.7834 9.78234 13.7834 12.0025V13.67H0.443359V12.0025ZM7.11336 10.5732C5.40775 10.5732 3.47345 11.2116 2.67305 11.7643H11.5537C10.7533 11.2116 8.81897 10.5732 7.11336 10.5732ZM8.54264 3.665C8.54264 2.87413 7.90423 2.23572 7.11336 2.23572C6.32249 2.23572 5.68407 2.87413 5.68407 3.665C5.68407 4.45587 6.32249 5.09429 7.11336 5.09429C7.90423 5.09429 8.54264 4.45587 8.54264 3.665ZM13.8215 8.72467C14.9268 9.52507 15.6891 10.5923 15.6891 12.0025V13.67H19.5005V12.0025C19.5005 10.0777 16.1655 8.98195 13.8215 8.72467ZM16.1655 3.665C16.1655 5.50402 14.6695 7 12.8305 7C12.316 7 11.8395 6.87613 11.4012 6.6665C12.0015 5.81846 12.3541 4.77984 12.3541 3.665C12.3541 2.55016 12.0015 1.51154 11.4012 0.663502C11.8395 0.453873 12.316 0.330002 12.8305 0.330002C14.6695 0.330002 16.1655 1.82599 16.1655 3.665Z" fill="white" />
                                    </mask>
                                    <g mask="url(#mask0)">
                                        <rect x="-2" y="-5" width="24" height="24" fill="#66788A" />
                                    </g>
                                </svg>
                                <p>Teachers</p></Link>
                            </li>
                            <li><Link to="/timetable">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 0H18C19.1 0 20 0.9 20 2V18C20 19.1 19.1 20 18 20H2C0.9 20 0 19.1 0 18V2C0 0.9 0.9 0 2 0ZM2 18H6V14H2V18ZM6 12H2V8H6V12ZM2 6H6V2H2V6ZM12 18H8V14H12V18ZM8 12H12V8H8V12ZM12 6H8V2H12V6ZM14 18H18V14H14V18ZM18 12H14V8H18V12ZM14 6H18V2H14V6Z" fill="#66788A" />
                                </svg>
                                <p>Timetable</p></Link>
                            </li>
                            <li><Link to="/absences">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1801 2.19H9.02006L7.54006 3.66L6.13006 2.25L8.19006 0.190002H15.1801C16.2801 0.190002 17.1801 1.09 17.1801 2.19V13.3L15.1801 11.3V2.19ZM19.4401 18.4L1.97006 0.930002L0.560059 2.34L3.30006 5.08L3.18006 5.2V16.19C3.18006 17.29 4.08006 18.19 5.18006 18.19H15.1801C15.5301 18.19 15.8601 18.09 16.1501 17.93L18.0301 19.81L19.4401 18.4ZM5.18006 16.19V6.96L14.4101 16.19H5.18006Z" fill="#66788A" />
                                </svg>
                                <p>Absences</p></Link>
                            </li>
                            <li><Link to="/performance">
                                <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 2C22 3.1 21.1 4 20 4C19.82 4 19.65 3.98 19.49 3.93L15.93 7.48C15.98 7.64 16 7.82 16 8C16 9.1 15.1 10 14 10C12.9 10 12 9.1 12 8C12 7.82 12.02 7.64 12.07 7.48L9.52 4.93C9.36 4.98 9.18 5 9 5C8.82 5 8.64 4.98 8.48 4.93L3.93 9.49C3.98 9.65 4 9.82 4 10C4 11.1 3.1 12 2 12C0.9 12 0 11.1 0 10C0 8.9 0.9 8 2 8C2.18 8 2.35 8.02 2.51 8.07L7.07 3.52C7.02 3.36 7 3.18 7 3C7 1.9 7.9 1 9 1C10.1 1 11 1.9 11 3C11 3.18 10.98 3.36 10.93 3.52L13.48 6.07C13.64 6.02 13.82 6 14 6C14.18 6 14.36 6.02 14.52 6.07L18.07 2.51C18.02 2.35 18 2.18 18 2C18 0.9 18.9 0 20 0C21.1 0 22 0.9 22 2Z" fill="#66788A" />
                                </svg>
                                <p>Student performance</p></Link>
                            </li>
                            <li><Link to="/feedback">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 0H18C19.1 0 20 0.9 20 2V14C20 15.1 19.1 16 18 16H4L0 20L0.01 2C0.01 0.9 0.9 0 2 0ZM3.17 14H18V2H2V15.17L2.58 14.59L3.17 14ZM4 10H6V12H4V10ZM6 7H4V9H6V7ZM4 4H6V6H4V4ZM13 10H8V12H13V10ZM8 7H16V9H8V7ZM16 4H8V6H16V4Z" fill="#66788A" />
                                </svg>
                                <p>Student feedback</p></Link>
                            </li>
                            <hr />
                            <p className="faded-text">Support</p>
                            <li> <Link to="/settings">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="icon/action/settings_24px">
                                        <path id="icon/action/settings_24px_2" fill-rule="evenodd" clip-rule="evenodd" d="M19.5023 12C19.5023 12.34 19.4723 12.66 19.4323 12.98L21.5423 14.63C21.7323 14.78 21.7823 15.05 21.6623 15.27L19.6623 18.73C19.5723 18.89 19.4023 18.98 19.2323 18.98C19.1723 18.98 19.1123 18.97 19.0523 18.95L16.5623 17.95C16.0423 18.34 15.4823 18.68 14.8723 18.93L14.4923 21.58C14.4623 21.82 14.2523 22 14.0023 22H10.0023C9.75228 22 9.54228 21.82 9.51228 21.58L9.13228 18.93C8.52228 18.68 7.96228 18.35 7.44228 17.95L4.95228 18.95C4.90228 18.97 4.84228 18.98 4.78228 18.98C4.60228 18.98 4.43228 18.89 4.34228 18.73L2.34228 15.27C2.22228 15.05 2.27228 14.78 2.46228 14.63L4.57228 12.98C4.53228 12.66 4.50228 12.33 4.50228 12C4.50228 11.67 4.53228 11.34 4.57228 11.02L2.46228 9.37C2.27228 9.22 2.21228 8.95 2.34228 8.73L4.34228 5.27C4.43228 5.11 4.60228 5.02 4.77228 5.02C4.83228 5.02 4.89228 5.03 4.95228 5.05L7.44228 6.05C7.96228 5.66 8.52228 5.32 9.13228 5.07L9.51228 2.42C9.54228 2.18 9.75228 2 10.0023 2H14.0023C14.2523 2 14.4623 2.18 14.4923 2.42L14.8723 5.07C15.4823 5.32 16.0423 5.65 16.5623 6.05L19.0523 5.05C19.1023 5.03 19.1623 5.02 19.2223 5.02C19.4023 5.02 19.5723 5.11 19.6623 5.27L21.6623 8.73C21.7823 8.95 21.7323 9.22 21.5423 9.37L19.4323 11.02C19.4723 11.34 19.5023 11.66 19.5023 12ZM17.5023 12C17.5023 11.79 17.4923 11.58 17.4523 11.27L17.3123 10.14L18.2023 9.44L19.2723 8.59L18.5723 7.38L17.3023 7.89L16.2423 8.32L15.3323 7.62C14.9323 7.32 14.5323 7.09 14.1023 6.91L13.0423 6.48L12.8823 5.35L12.6923 4H11.3023L11.1023 5.35L10.9423 6.48L9.88228 6.91C9.47228 7.08 9.06228 7.32 8.63228 7.64L7.73228 8.32L6.69228 7.9L5.42228 7.39L4.72228 8.6L5.80228 9.44L6.69228 10.14L6.55228 11.27C6.52228 11.57 6.50228 11.8 6.50228 12C6.50228 12.2 6.52228 12.43 6.55228 12.74L6.69228 13.87L5.80228 14.57L4.72228 15.41L5.42228 16.62L6.69228 16.11L7.75228 15.68L8.66228 16.38C9.06228 16.68 9.46228 16.91 9.89228 17.09L10.9523 17.52L11.1123 18.65L11.3023 20H12.7023L12.9023 18.65L13.0623 17.52L14.1223 17.09C14.5323 16.92 14.9423 16.68 15.3723 16.36L16.2723 15.68L17.3123 16.1L18.5823 16.61L19.2823 15.4L18.2023 14.56L17.3123 13.86L17.4523 12.73C17.4823 12.43 17.5023 12.21 17.5023 12ZM12.0023 8C9.79228 8 8.00228 9.79 8.00228 12C8.00228 14.21 9.79228 16 12.0023 16C14.2123 16 16.0023 14.21 16.0023 12C16.0023 9.79 14.2123 8 12.0023 8ZM10.0023 12C10.0023 13.1 10.9023 14 12.0023 14C13.1023 14 14.0023 13.1 14.0023 12C14.0023 10.9 13.1023 10 12.0023 10C10.9023 10 10.0023 10.9 10.0023 12Z" fill="#66788A" />
                                    </g>
                                </svg>
                                <p>Settings</p></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="right-main-content">
                        <Route path="/students" component={StudentsList}></Route>
                        <Route path="/teachers" component={TeachersList}></Route>
                        <Route path="/timetable" component={Timetable}></Route>
                        <Route path="/settings" component={Settings}></Route>
                        <Route path="/user" component={User}></Route>
                    </div>
                </div>
            </Router>
        );
    }
}

const TeachersList = () => {
    return (
        <div>
            <div className="main-content-nav">
                <div className="nav-tabs">
                    <div className="tab">
                        <h6>Profile</h6>
                    </div>
                    <div className="tab">
                        <h6>Account</h6>
                    </div>
                    <div className="tab">
                        <h6>Price Plans</h6>
                    </div>
                </div>
                <Link to="/addTeacher">Add teacher</Link>
            </div>
            <hr style={{ color: '#E4E7EB', margin: 0 }} />
            <div className="list-container">
                <table className="teachers-table">
                    <thead>
                        <th>Full Name</th>
                        <th>Department</th>
                        <th>Subject</th>
                        <th>Workload</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="table-fullname">Name Surname</td>
                            <td>Computer science</td>
                            <td>Artificial Intelligence</td>
                            <td>70%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

const StudentsList = () => {
    return (
        <div>
            <div className="main-content-nav">
                <div className="nav-tabs">
                    <div className="tab">
                        <h6>Profile</h6>
                    </div>
                    <div className="tab">
                        <h6>Account</h6>
                    </div>
                    <div className="tab">
                        <h6>Price Plans</h6>
                    </div>
                </div>
                <div className="nav-button">
                    <Link to="/addStudent">Add student</Link>
                </div>
            </div>
            <hr style={{ color: '#E4E7EB', margin: 0 }} />
            <div className="list-container">
                <table className="students-table">
                    <thead>
                        <th>Full Name</th>
                        <th>Faculty</th>
                        <th>Year</th>
                        <th>Performance</th>
                        <th>Absences</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="table-fullname">Name Surname</td>
                            <td>Computer science</td>
                            <td>2017</td>
                            <td>Good</td>
                            <td>7%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

const Settings = () => {
    return (
        <div>
            <div className="page-heading">
                <div className="page-name">
                    <h1>Settings</h1>
                </div>
            </div>
            <div className="settings-card">
                <div className="settings-heading">
                    <p className="plan-name">Basic Profile</p>
                    <p>The information can be edited from your profile page</p>
                </div>
                <form className="settings-container">
                    <p>Check Absence</p>
                    <input type="radio" id="opt1" name="absence" value="automatically" />
                    <label for="opt1">Automatically</label>
                    <input type="radio" id="age2" name="absence" value="manually" />
                    <label for="age2">Manually</label>
                    <div className="abs-limit">
                        <input type="text" placeholder="Set limit of absence" />
                        <small>The maximum limit in your pack is 24</small>
                    </div>
                    <hr style={{ 'margin-left': '-16px', 'margin-top': '40px', marginBottom: 0 }} />
                    <button className="btn-save-settings" type="submit">Save settings</button>
                </form>
            </div>

            <button className="add-button" type="submit" style={{ 'margin': '40px 24px' }}>Save settings</button>
        </div>
    )
}

const User = () => {
    return (
        <h1>User - {localStorage.getItem('token')}</h1>
    )
}
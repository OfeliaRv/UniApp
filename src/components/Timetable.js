import React from 'react';
import axios from 'axios';

const Timetable = (props) => {
    localStorage.setItem('week', 0);
    axios.get('/university/getTimetable?week=' + localStorage.getItem('week'))
        .then(res => {
            props.setTimeTableData(res.data);
        })
        .catch(err => {
            console.log(err);
        })

    return (
        <div>
            <div className="page-heading">
                <div className="page-name">
                    <h1>Timetable</h1>
                </div>
                <div className="timetable-heading">
                    <h1 className="department">CS</h1>
                    <h1 className="fullname">Abdullah Farahani</h1>
                    <h1 className="subject">Math</h1>
                </div>
                <div className="timetable-control">
                    <svg onClick={handleWeek_prev} width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.0625 17.9766L9.84375 17.2344C10 17.0391 10 16.7266 9.84375 16.5703L2.77344 9.5L9.84375 2.39062C10 2.23438 10 1.92188 9.84375 1.72656L9.0625 0.984375C8.86719 0.789062 8.59375 0.789062 8.39844 0.984375L0.195314 9.14844C0.039064 9.34375 0.0390639 9.61719 0.195314 9.8125L8.39844 17.9766C8.59375 18.1719 8.86719 18.1719 9.0625 17.9766Z" fill="#1F1CAF" />
                    </svg>
                    <p className="timetable-date"><span className="week">Week 12</span></p>
                    <svg onClick={handleWeek_next} width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.9375 1.02344L0.15625 1.76562C0 1.96094 0 2.27344 0.15625 2.42969L7.22656 9.5L0.15625 16.6094C0 16.7656 0 17.0781 0.15625 17.2734L0.9375 18.0156C1.13281 18.2109 1.40625 18.2109 1.60156 18.0156L9.80469 9.85156C9.96094 9.65625 9.96094 9.38281 9.80469 9.1875L1.60156 1.02344C1.40625 0.828125 1.13281 0.828125 0.9375 1.02344Z" fill="#1F1CAF" />
                    </svg>
                </div>
            </div>
            <div className="timetable-holder">
                <table className="timetable">
                    <thead>
                        <tr>
                            <th>Monday</th>
                            <th>Tuesday</th>
                            <th>Wednesday</th>
                            <th>Thursday</th>
                            <th>Friday</th>
                            <th>Saturday</th>
                            <th>Sunday</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="monday-1" style={{ backgroundColor: '#BEF1C6' }}>
                                <p id="subject">Math</p>
                                <p id="event"></p>
                                <p id="time">8:30</p>
                            </td>
                            <td className="tuesday-1" style={{ backgroundColor: ' #FFECEC' }}>
                                <p id="subject">Defense Against Dark Arts</p>
                                <p id="event"></p>
                                <p id="time">8:30</p>
                            </td>
                            <td className="wednesday-1" style={{ backgroundColor: '#BEF1C6' }}>
                                <p id="subject">Math</p>
                                <p id="event"></p>
                                <p id="time">8:30</p>
                            </td>
                            <td className="thursday-1" style={{ backgroundColor: ' #FFECEC' }}>
                                <p id="subject">Defense Against Dark Arts</p>
                                <p id="event"></p>
                                <p id="time">8:30</p>
                            </td>
                            <td className="friday-1" style={{ backgroundColor: '#edd4ad' }}>
                                <p id="subject">History</p>
                                <p id="event"></p>
                                <p id="time">8:30</p>
                            </td>
                            <td className="saturday-1">
                                <p id="subject"></p>
                                <p id="event"></p>
                                <p id="time"></p>
                            </td>
                            <td className="sunday-1">
                                <p id="subject"></p>
                                <p id="event"></p>
                                <p id="time"></p>
                            </td>
                        </tr>
                        <tr>
                            <td className="monday-2" style={{ backgroundColor: '#D7ECFF' }}>
                                <p id="subject">Information Security</p>
                                <p id="event"></p>
                                <p id="time">10:15</p>
                            </td>
                            <td className="tuesday-2" style={{ backgroundColor: ' #FFECEC' }}>
                                <p id="subject">Defense Against Dark Arts</p>
                                <p id="event"></p>
                                <p id="time">10:15</p>
                            </td>
                            <td className="wednesday-2">
                                <p id="subject"></p>
                                <p id="event"></p>
                                <p id="time"></p>
                            </td>
                            <td className="thursday-2" style={{ backgroundColor: '#BEF1C6' }}>
                                <p id="subject">Math</p>
                                <p id="event"></p>
                                <p id="time">10:15</p>
                            </td>
                            <td className="friday-2" style={{ backgroundColor: '#D7ECFF' }}>
                                <p id="subject">Information Security</p>
                                <p id="event"></p>
                                <p id="time">10:15</p>
                            </td>
                            <td className="saturday-2">
                                <p id="subject"></p>
                                <p id="event"></p>
                                <p id="time"></p>
                            </td>
                            <td className="sunday-2">
                                <p id="subject"></p>
                                <p id="event"></p>
                                <p id="time"></p>
                            </td>
                        </tr>
                        <tr>
                            <td className="monday-3">
                                <p id="subject"></p>
                                <p id="event"></p>
                                <p id="time"></p>
                            </td>
                            <td className="tuesday-3" style={{ backgroundColor: '#D7ECFF' }}>
                                <p id="subject">Information Security</p>
                                <p id="event"></p>
                                <p id="time">12:45</p>
                            </td>
                            <td className="wednesday-3">
                                <p id="subject"></p>
                                <p id="event"></p>
                                <p id="time"></p>
                            </td>
                            <td className="thursday-3">
                                <p id="subject"></p>
                                <p id="event"></p>
                                <p id="time"></p>
                            </td>
                            <td className="friday-3" style={{ backgroundColor: '#edd4ad' }}>
                                <p id="subject">History</p>
                                <p id="event"></p>
                                <p id="time">12:45</p>
                            </td>
                            <td className="saturday-3">
                                <p id="time"></p>
                                <p id="subject"></p>
                                <p id="event"></p>
                            </td>
                            <td className="sunday-3">
                                <p id="subject"></p>
                                <p id="event"></p>
                                <p id="time"></p>
                            </td>
                        </tr>
                        <tr>
                            <td className="monday-4" style={{ backgroundColor: '#BEF1C6' }}>
                                <p id="subject">Math</p>
                                <p id="event"></p>
                                <p id="time">14:30</p>
                            </td>
                            <td className="tuesday-4">
                                <p id="subject"></p>
                                <p id="event"></p>
                                <p id="time"></p>
                            </td>
                            <td className="wednesday-4">
                                <p id="subject"></p>
                                <p id="event"></p>
                                <p id="time"></p>
                            </td>
                            <td className="thursday-4" style={{ backgroundColor: '#edd4ad' }}>
                                <p id="subject">History</p>
                                <p id="event"></p>
                                <p id="time">14:30</p>
                            </td>
                            <td className="friday-4" style={{ backgroundColor: ' #FFECEC' }}>
                                <p id="subject">Defense Against Dark Arts</p>
                                <p id="event"></p>
                                <p id="time">14:30</p>
                            </td>
                            <td className="saturday-4">
                                <p id="subject"></p>
                                <p id="event"></p>
                                <p id="time"></p>
                            </td>
                            <td className="sunday-4">
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

export default Timetable;

const handleWeek_prev = () => {
    var week = localStorage.getItem('week');
    localStorage.setItem('week', week - 1);
    axios.get('/university/getTimetable?week=' + localStorage.getItem('week'))
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
}

const handleWeek_next = () => {
    var week = localStorage.getItem('week');
    localStorage.setItem('week', week + 1);
    axios.get('/university/getTimetable?week=' + localStorage.getItem('week'))
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
}

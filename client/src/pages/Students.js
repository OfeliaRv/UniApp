import React, { Component } from 'react';
import Navbar from '../components/layout/Navbar';

class Students extends Component {
    render() {
        return (
            <div>
                <div >
                    <Navbar />
                </div>

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
                        <hr style={{ margin: '0 16px' }} />
                    </div>
                    <div className="right-main-content">
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
                                <button>Add student</button>
                            </div>
                        </div>
                        <hr style={{ color: '#E4E7EB', margin: 0 }} />
                    </div>
                </div>
            </div>

        );
    }
}

export default Students;

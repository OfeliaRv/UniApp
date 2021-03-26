import React from 'react';

const Settings = () => {
    return (
        <div>
            <div className="page-heading">
                <div className="page-name">
                    <h1>Settings</h1>
                </div>
            </div>
            <div className="dashboard-card-item">
                <div className="dashboard-card-heading">
                    <p className="plan-name">Basic Profile</p>
                    <p>The information can be edited from your profile page</p>
                </div>
                <form className="dashboard-card-inner">
                    <p>Check Absence</p>
                    <input type="radio" id="opt1" name="absence" value="automatically" checked />
                    <label for="opt1">Automatically</label>
                    <input type="radio" id="age2" name="absence" value="manually" />
                    <label for="age2">Manually</label>
                    <div className="abs-limit">
                        <input type="text" placeholder="Set limit of absence" disabled />
                        <small>The maximum limit in your pack is 24</small>
                    </div>
                    <hr style={{ 'margin-left': '-16px', 'margin-top': '40px', marginBottom: 0 }} />
                    <button className="btn-save-settings" type="submit">Save settings</button>
                </form>
            </div>
        </div>
    )
}

export default Settings;
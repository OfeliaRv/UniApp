import React from 'react';

const AddUniveristy = (props) => {
    return (
        <div>
            <div className="page-heading">
                <div className="page-name">
                    <h1>Add a Univeristy</h1>
                </div>
            </div>
            <div className="dashboard-card-item">
                <div className="dashboard-card-heading">
                    <p className="plan-name">Add a university</p>
                    <p>Add your university to our database for tracking</p>
                </div>
                <form className="dashboard-card-inner" onSubmit={props.AddUniveristy}>
                    <div className="dashboard-form col-md-12">
                        <div className="dashboard-form-col col-md-4">
                            <input type="text" name="name" placeholder="University name" required />
                            <input type="text" name="domain" placeholder="Domain (ex: ufaz.az)" required />
                        </div>
                    </div>
                    <hr style={{ 'margin-top': '40px', marginBottom: 0 }} />
                    <button className="add-button" type="submit" style={{ 'margin': '24px' }}>Add University</button>
                </form>
            </div>
        </div>
    )
}

export default AddUniveristy;
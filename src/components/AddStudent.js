import React from 'react';

const AddStudent = (props) => {
    return (
        <div className="add-user">
            <div className="page-heading">
                <div className="page-name">
                    <h1>Add Student</h1>
                </div>
            </div>
            <div className="dashboard-card-item">
                <div className="dashboard-card-heading">
                    <p className="plan-name">Basic Profile</p>
                    <p>The information can be edited from your profile page</p>
                </div>
                <form className="dashboard-card-inner" onSubmit={props.addStudentHandler}>
                    <div className="dashboard-form col-md-12">
                        <div className="dashboard-form-col col-md-4">
                            <input type="text" name="firstname" placeholder="First name" onChange={e => this.firstname = e.target.value} required />
                            <input type="email" name="email" placeholder="Email" onChange={e => this.email = e.target.value} required />
                            <input type="text" name="faculty" placeholder="Faculty" onChange={e => this.faculty = e.target.value} required />
                        </div>
                        <div className="dashboard-form-col col-md-4">
                            <input type="text" name="lastname" placeholder="Last name" onChange={e => this.lastname = e.target.value} required />
                            <input type="number" name="admission_year" placeholder="Admission year" onChange={e => this.admission_year = e.target.value} required />
                            <input type="text" name="enrolledLessons" placeholder="Enrolled Lessons (list)" onChange={e => this.enrolledLessons = e.target.value} required />
                        </div>
                    </div>
                    <hr style={{ 'margin-top': '40px', marginBottom: 0 }} />
                    <button className="add-button" type="submit" style={{ 'margin': '24px' }}>Add Student</button>
                </form>
            </div>
        </div>
    )
}

export default AddStudent;

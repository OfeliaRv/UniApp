import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TeachersList = () => {
    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
        axios.get('/university/getTeachers')
            .then(
                res => {
                    setTeachers(res.data);
                })
            .catch(err => {
                console.log(err);
            });
    }, [])

    return (
        <div>
            <div className="list-container">
                <table className="teachers-table">
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Department</th>
                            <th>Subject</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teachers.map(teacher =>
                            <tr>
                                <td className="table-fullname">{teacher.first_name} {teacher.last_name} </td>
                                <td>{teacher.department}</td>
                                <td>{teacher.department}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TeachersList;
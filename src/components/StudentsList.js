import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentsList = () => {
    const [students, setStudents] = useState([]);
    useEffect(() => {
        axios.get('/university/getStudents')
            .then(
                res => {
                    setStudents(res.data);
                })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <div className="list-container">
                <table className="students-table">
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Faculty</th>
                            <th>Year</th>
                            <th>Performance</th>
                            <th>Absences</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map(student => 
                            <tr>
                                <td className="table-fullname">{student.First_name} {student.Last_name}</td>
                                <td>{student.faculty}</td>
                                <td>{student.admission_year}</td>
                                <td>Good</td>
                                <td>12%</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default StudentsList;
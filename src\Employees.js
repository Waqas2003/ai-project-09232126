import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Employees() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get('https://api.pap.com/employees')
            .then(response => {
                setEmployees(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            <h1>Employees</h1>
            <ul>
                {employees.map(employee => (
                    <li key={employee.id}>{employee.name} ({employee.designation})</li>
                ))}
            </ul>
        </div>
    );
}

export default Employees;
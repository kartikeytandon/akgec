import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmployeeGrid = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };
    fetchEmployees();
  }, []);

  return (
    <div>
      <h2>Employee List</h2>
      <div className="grid-container">
        {employees.map((emp) => (
          <div key={emp.id} className="grid-item">
            <h3>{emp.name}</h3>
            <p>Email: {emp.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeGrid;
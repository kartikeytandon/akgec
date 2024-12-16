import React from 'react';
import RegisterForm from './components/RegisterForm';
import EmployeeGrid from './components/EmployeeGrid';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <RegisterForm />
      <EmployeeGrid />
    </div>
  );
}

export default App;
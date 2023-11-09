import React from "react";
import "./Employee.css";

const Employee = () => {
  return (
    <div className="employee-container">
      <h2>Employee Panel</h2>
      <div className="employee-content">
        {/* Add functionality for employee tasks, like managing leads and service requests */}
        <div className="employee-input-group">
          <input type="text" className="employee-input"></input>
        </div>
        <button type="submit" className="employee-submit">
          submit
        </button>
      </div>
    </div>
  );
};

export default Employee;

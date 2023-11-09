import React from "react";
import "./Manager.css";

const Manager = () => {
  return (
    <div className="manager-container">
      <h2>Manager Panel</h2>
      <div className="manager-content">
        {/* Add functionality for managing users and other admin tasks */}
        <div className='manager-input-group'>
        <input type='text' className='manager-input'></input>
        </div>        
        <button type='submit' className='manager-submit'>submit</button>
      </div>
    </div>
  );
};

export default Manager;

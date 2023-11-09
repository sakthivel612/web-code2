import React from 'react';
import "./Admin.css";

const Admin = () => {
  return (
    <div className="admin-container">
      <h2>Admin Panel</h2>
      <div className="admin-content">
        {/* Add functionality for managing users and other admin tasks */}
        <div className='Admin-input-group'>
        <input type='text' className='Admin-input'></input>
        </div>        
        <button type='submit' className='Admin-submit'>submit</button>
      </div>
    </div>
  );
};

export default Admin;

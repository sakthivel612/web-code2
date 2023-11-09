import React from "react";
import "./Dashboard.css"; // Import the CSS file
import AppFooter from "../AppFooter/AppFooter";
import Nav_bar from "../nav_bar/nav_bar";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Nav_bar></Nav_bar>
      <div className="container-fluid">
        <div className="Content-Dashboard">
          <h2 className="Dashboard-name">Dashboard</h2>
        </div>
        <div className="row">
          <div className="stat-box">
            <div className="stat-box-1">
              <div className="stat-label">Service Requests</div>
              <div className="stat-value">25</div>
            </div>
          </div>
          <div className="stat-box">
            <div className="stat-box-2">
              <div className="stat-label">Leads</div>
              <div className="stat-value">50</div>
            </div>
          </div>
          <div className="stat-box">
            <div className="stat-box-3">
              <div className="stat-label">Contacts</div>
              <div className="stat-value">35</div>
            </div>
          </div>
        </div>
      </div>
      <AppFooter></AppFooter>
    </div>
  );
};

export default Dashboard;

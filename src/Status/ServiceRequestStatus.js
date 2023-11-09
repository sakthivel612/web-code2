import React from "react";
import "./ServiceRequestStatus.css";

const ServiceRequestStatus = ({ status }) => {
  return (
    <div className={`service-request-status ${status.toLowerCase()}`}>
      {status}
    </div>
  );
};

export default ServiceRequestStatus;

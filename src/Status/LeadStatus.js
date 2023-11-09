import React from "react";
import "./LeadStatus.css";

const LeadStatus = () => {
  const Status = [
    {
      id: 1,
      name: "lead 1",
      Newstatus: "NEW",
    },
    {
      id: 2,
      name: "lead 2",
      Loststatus: "Lost",
    },
    {
      id: 3,
      name: "lead 3",
      contactedstatus: "contacted",
    },
    {
      id: 4,
      name: "lead 4",
      anceledstatus: "Canceled",
    },
    {
      id: 5,
      name: "lead 5",
      Qualifiedstatus: "Qualified",
    },
    {
      id: 6,
      name: "lead 6",
      Confirmedstatus: "Confirmed",
    },
  ];
  return (
    <div className="lead-status">
      <div className="new">
        <p>{Status.Newstatus}</p>
      </div>
    </div>
  )
};

export default LeadStatus;

import React from "react";

import Stats from "../Stats/Stats";
import UserStats from "../UserStats/UserStats";
const Dashboard = () => {
  return (
    <div className="container-fluid px-4">
      <div className="page-header row no-gutters py-4">
        <div className="col-12 col-sm-4 text-center text-sm-left mb-0">
          <span className="text-uppercase page-subtitle">Dashboard</span>
          <h3 className="page-title">Account Overview</h3>
        </div>
      </div>
      <Stats />
      <UserStats />
    </div>
  );
};

export default Dashboard;

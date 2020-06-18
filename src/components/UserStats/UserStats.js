import React from "react";

import "./userstats.css";

const UserStats = () => {
  return (
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12 mb-4">
        <div className="card card-small">
          <div className="card-header border-bottom">
            <h6>Users</h6>
          </div>
          <div className="card-body" style={{ width: "100%" }}>
            <canvas height="130" class="blog-overview" id="blog-users"></canvas>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-12 col-sm-12 mb-4">
        <div className="card card-small">
          <div className="card-header border-bottom">
            <h6>Views</h6>
          </div>
          <div className="card-body" style={{ width: "100%" }}>
            <canvas height="130" class="blog-overview" id="blog-views"></canvas>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-12 col-sm-12 mb-4">
        <div className="card card-small">
          <div className="card-header border-bottom">
            <h6>Shares</h6>
          </div>
          <div className="card-body" style={{ width: "100%" }}>
            <canvas
              height="130"
              class="blog-overview"
              id="blog-shares"
            ></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserStats;

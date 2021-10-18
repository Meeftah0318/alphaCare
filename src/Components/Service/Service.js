import React from "react";

const Service = props => {
  const { name, details, image } = props.service;
  return (
    <div className="container service-container">
      <div className="card-group mx-2">
        <div class="card">
          <img
            src={image}
            height="300ox"
            // width="400px"
            className="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">{details.slice(0, 140)}...</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

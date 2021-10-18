import React from "react";

const Service = props => {
  const { name, details, image } = props.service;
  return (
    <div className="container service-container">
      <div className="card-group mx-2">
        <div className="card">
          <img
            src={image}
            height="300ox"
            // width="400px"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h3 className="card-title">{name}</h3>
            <p className="card-text">{details.slice(0, 120)}...</p>
          </div>
          <div className="card-footer">
            <div className="d-flex justify-content-center">
              <button className="btn btn-outline-success ">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

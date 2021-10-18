import React from "react";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
  return (
    <div>
      {/* banner  */}
      <div className="banner-container">
        <div className="banner">
          <div className="w-75 mx-auto row ">
            <div className="col-md-8 mt-5 pt-5">
              {/* banner text */}
              <h1 className="fs-1">
                ALL YOUR <span className="pe-3 ">HEALTHCARE</span> NEEDS <br />
                IN ONE SINGLE PLACE
              </h1>
              <p className="w-75">
                Visiting healthcare centers are quite time consuming, thus, we
                are here to support you with all your healthcare needs under one
                roof. Book an appointment today for your check-ups, or just pass
                by at our drop-in champers,{" "}
              </p>{" "}
              <h3>As simple as that.</h3>
            </div>
            {/* banner cards */}
            <div className="col-md-4 mt-5">
              <div className="d-flex my-3 p-3 banner-card">
                <div className="my-auto fs-1 me-4">
                  <i class="far fa-clock"></i>
                </div>
                <div>
                  <h4>24hrs Available doctors</h4>
                  <p>Dont worry about the time, we are always available</p>
                </div>
              </div>
              <div className="d-flex my-3 p-3 banner-card">
                <div className="my-auto fs-1 me-4">
                  <i class="fas fa-mobile-alt"></i>
                </div>
                <div>
                  <h4>Always available customer services</h4>
                  <p>
                    We are always there for you, call us whenever you need help.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* banner ends  */}

      {/* services  */}
      <Services></Services>
    </div>
  );
};

export default Home;

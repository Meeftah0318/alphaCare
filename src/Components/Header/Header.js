import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-2">
        <div className="container-fluid w-75 d-flex justify-content-between ">
          <div>
            {/* link the brand name with home tab */}
            <Link className="navbar-brand fs-2 fw-bold text-success" to="home">
              <span className="me-2">
                <i class="fas fa-clinic-medical"></i>
              </span>
              Alpha Care
            </Link>
          </div>
          <div>
            <div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                {/* link to routes */}
                <ul className="navbar-nav link-item">
                  <Link to="home">Home</Link>
                  <Link className="ms-5" to="services">
                    Services
                  </Link>
                  <Link className="ms-5" to="about">
                    About Us
                  </Link>
                  <Link className="ms-5" to="contact">
                    Contact Us
                  </Link>
                </ul>
              </div>
            </div>
            <div className="d-flex justify-content-end mt-2">
              <button className="btn btn-outline-success  ">Login</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="my-5">
        <div className="w-75 mx-auto row">
          <div className="col-md-6 ">
            <div className=" p-5">
              <h2 className="text-success pb-3">Our Addresses</h2>
            </div>
          </div>

          {/* register form */}
          <div className="col-md-6 bg-light p-5">
            <h2 className="text-success">Login</h2>
            <form>
              <div className="mb-2">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="formGroupExampleInput2" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Type your password"
                />
              </div>

              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
              </div>
              <button type="submit" className="btn px-4 btn-success me-4">
                Submit
              </button>
              <button type="submit" className="btn px-4 btn-primary">
                Google Sign In
              </button>
              <br />
              <label className="form-check-label" htmlFor="exampleCheck1">
                New here? <br />
                <button type="submit" className="btn px-4 btn-outline-success">
                  <Link
                    className="text-decoration-none text-dark"
                    to="/register"
                  >
                    Please register
                  </Link>
                </button>
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

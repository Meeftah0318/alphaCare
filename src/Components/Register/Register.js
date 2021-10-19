import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="w-75 mx-auto">
        <h2>Register</h2>
        <form>
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
          <div className="mb-2">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Repeat Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Re-type your password"
            />
          </div>
          <button type="submit" className="btn px-4 btn-success me-4">
            Submit
          </button>
          <button type="submit" className="btn px-4 btn-primary">
            Sign In with Google
          </button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Register;

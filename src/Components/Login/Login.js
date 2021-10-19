import React from "react";

const Login = () => {
  return (
    <div>
      <div className="my-5">
        <div className="w-75 mx-auto row">
          {/* Register form */}
          <div className="col-md-6 ">
            <div className=" p-5">
              <h2 className="text-success pb-3">Our Addresses</h2>
            </div>
          </div>

          {/* register form */}
          <div className="col-md-6 bg-light p-5">
            <h2 className="text-success">Leave a message</h2>
            <form>
              <div className="mb-2">
                <label for="formGroupExampleInput" className="form-label">
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
                <label for="formGroupExampleInput2" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-2">
                <label for="exampleInputEmail1" className="form-label">
                  Contact number.
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Contact number"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your contact details.
                </div>
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Your message here.
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Write something"
                ></textarea>
              </div>

              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  I would like to request a return call.
                </label>
              </div>
              <button type="submit" className="btn px-4 btn-outline-success">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from "react";

const Contact = () => {
  return (
    <div className="my-5">
      <div className="w-75 mx-auto row">
        <div className="col-md-5 bg-light py-3">
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
        <div className="col-md-7 py-3">
          <h2 className="text-success text-center pb-3">Our Addresses</h2>
          <div className="ps-5">
            <div>
              <h4 className="text-secondary">Gothenburg Address</h4>
              <p>
                The Kings Sports Avenue,
                <br />
                35A, 41 250, Gothenburg <br />
                Krakosia
              </p>
              <h6>Phone: +46-76-751-2345</h6>
              <h6>Email: hq@alphacare.org</h6>
            </div>
            <br />
            <div>
              <h4 className="text-secondary">Vantaa Address</h4>
              <p>
                The cheese cup street,
                <br />
                2b, 41 276, Vantaa <br />
                Krakosia
              </p>
              <h6>Phone: +46-76-751-2346</h6>
              <h6>Email: vantaa@alphacare.org</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

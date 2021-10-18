import React from "react";

const About = () => {
  return (
    <div>
      <div className="w-75 mx-auto py-5">
        <div className="row">
          {/* about banner */}
          <div className="col-md-8">
            <h2 className="text-success mb-4">About AlphaCare</h2>
            <p className="fs-5">
              {" "}
              We are the best in class care center with a mission to bring
              academic medical center that integrates clinical and hospital care
              with research and education. We are growing slowly and maintaining
              the quality that we drive for.
            </p>
          </div>
          <div className="col-md-4 text-end">
            <p className="fs-5">Got Questions? Call Us</p>
            <p className="fs-5">+46-76-751-2345</p>
            <button className="btn btn-warning px-4 fs-5">
              <i class="fas fa-envelope"></i> Send and Email
            </button>
          </div>
        </div>
        {/* about main */}
        <div></div>
      </div>
    </div>
  );
};

export default About;

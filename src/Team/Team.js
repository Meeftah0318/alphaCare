import React from "react";
import "./Team.css";

const Team = () => {
  return (
    <div className="team-container py-5">
      <div className="w-75 mx-auto row">
        <div className="col-md-7 my-auto team-text pe-4">
          <h2 className="text-success">Dr. Sebastian Bergman</h2>
          <hr className="text-success" />
          <h3>The Team Leader</h3>

          <blockquote className="fs-5">
            &ldquo; My decision to become a doctor was driven largely by values
            instilled in me by my faith and my family. The idea of being a part
            of a profession focused on helping others regardless of
            circumstance, focused on facilitating people leading healthier and
            therefore happier lives. I can’t imagine a more fulfilling
            job.&rdquo;
          </blockquote>
        </div>
        <div className="col-md-5">
          <img height="500px" src="./images/doctor team.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Team;

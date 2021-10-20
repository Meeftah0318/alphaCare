import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MonoService = () => {
  let { id } = useParams();

  const [services, setService] = useState([]);

  useEffect(() => {
    fetch("./services.json")
      .then(res => res.json())
      .then(data => setService(data));
  }, []);

  return (
    <div>
      <div className="my-5">
        <div className="w-75 mx-auto row">
          <div style={{ height: "65vh" }} className="col-md-4 bg-light p-5">
            <h2 className="text-success">{id}</h2>
          </div>
          <div className="col-md-8 ">
            <div className=" p-5">
              <h2 className="text-success pb-3">Name</h2>
              <div>
                <h4 className="text-secondary">Details</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonoService;

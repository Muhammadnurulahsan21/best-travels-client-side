import React from "react";
import "./Packages.css";

const Packages = () => {
  return (
    <div className="custom-margin">
      <div className="pb-5">
        <div className="frist-banner text-center text-light ">
          <h2 className="about-text">Packages</h2>
        </div>
      </div>

      <div className="container pt-3 mb-5">
        <h3 className="text-center text-secondary">OUR ALL PACKAGES</h3>
        <h3 className="text-center text-muted top-promotion fw-normal">
          BEST TRAVEL PACKAGES AVAILABLE
        </h3>
      </div>

      <div className="container pb-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <button className="btn btn-outline-secondary">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>


      
    </div>
  );
};

export default Packages;

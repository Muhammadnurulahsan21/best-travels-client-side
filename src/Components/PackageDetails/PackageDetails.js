import { faCity, faGlobeAsia } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Nav, Row, Tab } from "react-bootstrap";
import { useParams } from "react-router";

import "./PackageDetails.css";

const PackageDetails = () => {
  const { packageKey } = useParams();
  const [packageDetails, setPackageDetails] = useState({});
  console.log(packageDetails);
  useEffect(() => {
    fetch(`http://localhost:4000/packages/${packageKey}`)
      .then((res) => res.json())
      .then((data) => setPackageDetails(data[0]));
  }, []);

  return (
    <div className="bg-eee custom-margin">
      <div className="container pt-4">
        <div className="row ">
          <div className="col-md-6  pt-5 pb-5">
            <div className="card">
              <img
                src={packageDetails.img}
                height="300px"
                width="50%"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body ">
                <h5 className="card-title fw-normal m-2">
                  <span className="fw-bold">Package Name:</span> {packageDetails.city}
                </h5>
                <h6 className="card-text fw-normal m-2 mt-3">
                  <span className="fw-bold">Package Price:</span> {packageDetails.price}
                </h6>
                <h6 className="card-text fw-normal m-2 mt-3">
                  <FontAwesomeIcon icon={faCity} size="lg" />{" "}
                  <span className="fw-bold">City Special:</span> {packageDetails.cityspeacial}
                </h6>
                <h6 className="card-text fw-normal m-2 mt-3">
                  <FontAwesomeIcon icon={faGlobeAsia} size="lg" />{" "}
                  <span className="fw-bold">Continent:</span> {packageDetails.continent}
                </h6>
                <h6 className="card-text fw-normal m-2 mt-3">
                  <span className="fw-bold">Package Description:</span>{" "}
                  {packageDetails.description}
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 pt-2">
            <h4 className="text-center">Enter Your Order Details</h4>
            <div className="mb-2">
              <label for="exampleFormControlInput1" className="form-label">
                Name:
              </label>
              <input
                type="name"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="mb-2">
              <label for="exampleFormControlInput1" className="form-label">
                Email:
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="mb-2">
              <label for="exampleFormControlInput1" className="form-label">
                Phone:
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Your Phone Number"
              />
            </div>

            <div className="mb-2">
              <label for="exampleFormControlInput1" className="form-label">
                Adult:
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Adult:"
              />
            </div>
            <div className="mb-2">
              <label for="exampleFormControlInput1" className="form-label">
                Children:
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Children"
              />
            </div>
            <div className="mb-2">
              <label for="exampleFormControlInput1" className="form-label">
                Address:
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Address:"
              />
            </div>
            <Button variant="secondary w-100 mt-3">Place Order</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;

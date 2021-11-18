import React from "react";
import "./PackagesCard.css";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCity, faGlobeAsia } from "@fortawesome/free-solid-svg-icons";

const PackagesCard = (props) => {
  const { city, price, cityspeacial, continent, description, img } =
    props.allPackage || {};
  return (
    <div className="col">
      <div className="card h-80 p-2 m-3 text-start">
        <img src={img} height="250px" className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title fw-normal">
            <span className="fw-bold">Package Name:</span> {city}
          </h5>
          <h6 className="card-text fw-normal">
            <span className="fw-bold">Package Price:</span> {price}
          </h6>
          <h6 className="card-text fw-normal">
            <FontAwesomeIcon icon={faCity} size="lg" /> <span className="fw-bold">City Special:</span> {cityspeacial}
          </h6>
          <h6 className="card-text fw-normal"><FontAwesomeIcon icon={faGlobeAsia} size="lg" /> <span className="fw-bold">Continent:</span> {continent}
          </h6>
          <h6 className="card-text fw-normal">
            <span className="fw-bold">Package Description:</span> {description}
          </h6>
          <Button variant="secondary">Book Now</Button>
        </div>
      </div>
    </div>
  );
};

export default PackagesCard;

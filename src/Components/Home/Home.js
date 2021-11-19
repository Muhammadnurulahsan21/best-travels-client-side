import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import "./Home.css";
import pic1 from "../../img/pic1.jpg";
import pic2 from "../../img/pic-2.jpg";
import pic3 from "../../img/pic3.jpg";
import pic4 from "../../img/pic-4.jpg";

import { Link } from "react-router-dom";
import HomePackagesCard from "../HomePackagesCard/HomePackagesCard";

const Home = () => {
  const [allPackages, setAllPackages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://frozen-ocean-73745.herokuapp.com/packages")
      .then((res) => res.json())
      .then((data) => {
        setAllPackages(data.packages);
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="custom-margin">
      <Carousel fade>
        <Carousel.Item>
          <img
            height="583px"
            className="d-block w-100"
            src={pic1}
            alt="First slide"
          />
          <Carousel.Caption className="mb-5 pb-5 pe-5 mb-5 fs-2 text-start ">
            <h1 className="fristline-text fw-lighter">BALI</h1>
            <h1 className="fristline-text tour-text">
              TOUR <span className="fw-light">INDONASIA</span>{" "}
              <span className="secondline-text fw-light">
                {" "}
                <span className="text-warning">SALE</span> $3.500
              </span>
            </h1>
            <h3 className="secondline-text">FULL CITY TOUR.</h3>
            <button
              type="button"
              className="btn btn-outline-info py-2 px-4 m-3 me-5 fs-5 text-light"
            >
              Book Now
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            height="583px"
            className="d-block w-100"
            src={pic2}
            alt="Second slide"
          />

          <Carousel.Caption className="mb-5 pb-5 pe-5 mb-5 fs-2 text-start">
            <h1 className="fristline-text fw-lighter">PARIS</h1>
            <h1 className="fristline-text tour-text">
              TOUR <span className="fw-light">EIFFEL</span>{" "}
              <span className="secondline-text fw-light">
                {" "}
                <span className="text-warning">SALE</span> $1.500
              </span>
            </h1>
            <h3 className="secondline-text">FULL CITY TOUR.</h3>
            <button
              type="button"
              className="btn btn-outline-light py-2 px-4 m-3 me-5 fs-5"
            >
              Book Now
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            height="583px"
            className="d-block w-100"
            src={pic3}
            alt="Third slide"
          />

          <Carousel.Caption className="mb-5 pb-5 pe-5 mb-5 fs-2 text-start ">
            <h1 className="fristline-text fw-lighter">ITALY</h1>
            <h1 className="fristline-text tour-text">
              BEST <span className="fw-light">TOURS</span>{" "}
              <span className="secondline-text fw-light">
                {" "}
                <span className="text-warning">SALE</span> $1200
              </span>
            </h1>
            <h3 className="secondline-text">FULL CITY TOUR.</h3>
            <button
              type="button"
              className="btn btn-outline-info py-2 px-4 m-3 me-5 text-light fs-5"
            >
              Book Now
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            height="583px"
            className="d-block w-100"
            src={pic4}
            alt="Fourth slide"
          />

          <Carousel.Caption className="mb-5 pb-5 pe-5 mb-5 fs-2 text-start text-dark">
            <h1 className="fristline-text fw-lighter">KUAKTA</h1>
            <h1 className="fristline-text tour-text">
              BEST <span className="fw-light">TOUR</span>{" "}
              <span className="secondline-text fw-light">
                {" "}
                <span className="text-warning">SALE</span> $2.000
              </span>
            </h1>
            <h3 className="secondline-text">FULL CITY TOUR.</h3>
            <button
              type="button"
              className="btn btn-outline-light py-2 px-4 m-3 me-5 fs-5 text-dark"
            >
              Book Now
            </button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div>
        <div className="container pt-5 mt-3 mb-5">
          <h3 className="text-center text-secondary">TOP PROMOTION</h3>
          <h3 className="text-center text-muted best-travel fw-normal">
            BEST TRAVEL PACKAGES AVAILABLE
          </h3>
        </div>
        {isLoading === true ? (
          <div className="text-center py-5">
            <div class="spinner-border text-secondary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="container mb-5 mt-5">
            <div className="row row-cols-1 row-cols-md-3 g-5">
              {allPackages.slice(0, 6).map((allPackage) => (
                <HomePackagesCard
                  key={allPackage.key}
                  allPackage={allPackage}
                ></HomePackagesCard>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="summer-banner px-5 mb-5 text-center text-light d-flex justify-content-center align-items-center">
        <div>
          <div className=" m-5">
            <h4 className=" fw-normal summer-promotion">SUMMER PROMOTION</h4>
          </div>
          <div className=" m-4">
            <h2 className=" fw-normal">SANTORINI - GREEK ISLAND TOUR</h2>
          </div>
          <div className=" m-4">
            <h4 className=" fw-normal">1000 $ for person - 6 nights</h4>
          </div>
          <div className=" m-5">
            <Link to="/packages" className="text-dark">
              <button className="btn btn-outline-light  px-4 py-2">
                MORE DETAILS
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container pt-5 mb-5">
        <h3 className="text-center text-secondary">OUR DESTINATIONS</h3>
        <h3 className="text-center text-muted destinations fw-normal">
          CHOOSE YOUR DESTINATION
        </h3>
      </div>

      <div className="container text-center d-flex justify-content-center align-items-center pt-3 pb-5">
        <div className="distanation-one">
          <div>
            <h5 className="fw-normal text-muted bg-light p-2">OCEANIA</h5>
          </div>
        </div>
        <div className="distanation-two ms-4">
          <h5 className="fw-normal text-muted bg-light p-2">DUBAI</h5>
        </div>
        <div className="distanation-three ms-4">
          <h5 className="fw-normal text-muted bg-light p-2">ASIA</h5>
        </div>
        <div className="distanation-four ms-4">
          <h5 className="fw-normal text-muted bg-light p-2">AMERICA</h5>
        </div>
      </div>

      <div className="pt-5 pb-5">
        <div className="home-lower-banner mb-5 text-light d-flex align-items-center fw-normal">
          <div className="container">
            <div className="d-flex justify-content-center align-items-center">
              <div className="d-flex justify-content-center align-items-center gap-5">
                <div className="text-center ms-5 pe-5 me-5">
                  <h1 className="fw-normal text-size">75</h1>
                  <h6 className="fw-normal bg-danger p-2">DESTINATIONS</h6>
                </div>
                <div className="text-center ms-5 pe-5 me-5">
                  <h1 className="fw-normal text-size">149</h1>
                  <h6 className="fw-normal bg-warning p-1">TOURS PACK</h6>
                </div>
                <div className="text-center ms-5  pe-5 me-5">
                  <h1 className="fw-normal text-size">32</h1>
                  <h6 className="fw-normal bg-success p-1">CRUISES</h6>
                </div>
                <div className="text-center ps-5 ms-5">
                  <h1 className="fw-normal text-size ">24</h1>
                  <h6 className="fw-normal bg-info p-1">HOUR SUPPORT</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

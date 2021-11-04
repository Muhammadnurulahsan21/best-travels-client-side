import React from "react";
import { Carousel } from "react-bootstrap";
import "./Home.css";
import pic1 from "../../img/pic1.jpg";
import pic2 from "../../img/pic-2.jpg";
import pic3 from "../../img/pic3.jpg";
import pic4 from "../../img/pic-4.jpg";

const Home = () => {
  return (
    <div className="custom-margin">
      <Carousel fade>
        <Carousel.Item>
          <img height="583px" className="d-block w-100" src={pic1} alt="First slide" />
          <Carousel.Caption className="mb-5 pb-5 pe-5 mb-5 fs-2 text-start ">
          <h1 className="fristline-text fw-lighter">BALI</h1>
            <h1 className="fristline-text tour-text">TOUR <span className="fw-light">INDONASIA</span> <span className="secondline-text fw-light"> <span className="text-warning">SALE</span> $3.500</span></h1>
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
          <img height="583px" className="d-block w-100" src={pic2} alt="Second slide" />

          <Carousel.Caption className="mb-5 pb-5 pe-5 mb-5 fs-2 text-start">
            <h1 className="fristline-text fw-lighter">PARIS</h1>
            <h1 className="fristline-text tour-text">TOUR <span className="fw-light">EIFFEL</span> <span className="secondline-text fw-light"> <span className="text-warning">SALE</span> $1.500</span></h1>
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
          <img height="583px" className="d-block w-100" src={pic3} alt="Third slide" />

          <Carousel.Caption className="mb-5 pb-5 pe-5 mb-5 fs-2 text-start ">
          <h1 className="fristline-text fw-lighter">ITALY</h1>
            <h1 className="fristline-text tour-text">BEST <span className="fw-light">TOURS</span> <span className="secondline-text fw-light"> <span className="text-warning">SALE</span> $1200</span></h1>
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
          <img height="583px" className="d-block w-100" src={pic4} alt="Fourth slide" />

          <Carousel.Caption className="mb-5 pb-5 pe-5 mb-5 fs-2 text-start text-dark">
          <h1 className="fristline-text fw-lighter">KUAKTA</h1>
            <h1 className="fristline-text tour-text">BEST <span className="fw-light">TOUR</span> <span className="secondline-text fw-light"> <span className="text-warning">SALE</span> $2.000</span></h1>
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


      <div className="container pt-5 mt-3 mb-5 pb-5 ">
          <h3 className="text-center text-secondary">TOP PROMOTION</h3>
          <h3 className="text-center text-muted best-travel fw-normal">BEST TRAVEL PACKAGES AVAILABLE</h3>
      </div>
      <div w-20 ></div>
    </div>
  );
};

export default Home;

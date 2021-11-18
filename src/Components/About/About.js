import React from "react";
import "./About.css";

import about01 from "../../img/01.png";
import about02 from "../../img/02.png";
import about03 from "../../img/03.png";
import about04 from "../../img/04.png";

const About = () => {
  return (
    <div className="custom-margin">
      <div className="about-bg-img text-center text-light">
        <h2 className="about-text">ABOUT</h2>
      </div>

      <div className="d-flex justify-content-center container pt-5 mt-5 pb-5 mb-5">
        <div className="frist-img text-light text-center">
          <h5 className="fw-normal img-text">CITY TOURS</h5>
          <h6 className="fw-normal img-text">CULTURAL AND ARTS</h6>
        </div>
        <div className="p-3 second-img text-light text-center">
          <h5 className="fw-normal img-text">HONEYMOON</h5>
          <h6 className="fw-normal img-text">LUXURY RESORTS</h6>
        </div>
        <div className="p-3 third-img text-light text-center">
          <h5 className="fw-normal img-text">ADVENTURE</h5>
          <h6 className="fw-normal img-text">COOL EXPERIENCES</h6>
        </div>
      </div>

      <div className="lower-banner mb-5 text-light d-flex align-items-center justify-content-start fw-normal">
        <div className="container">
          <div className="d-flex ps-5 ms-5 flex-column gap-5 container align-items-start">
            <div className="lower-banner1s-text">
              <h1 className="fw-normal">
                Doing the right thing, <br /> at the right time.
              </h1>
            </div>
            <div className="d-flex justify-content-center align-items-center gap-5 ">
              <div className="text-center pe-5">
                <h1 className="fw-normal text-size">15</h1>
                <h6 className="fw-normal">BRANCHES</h6>
              </div>
              <div className="text-center pe-5">
                <h1 className="fw-normal text-size">100</h1>
                <h6 className="fw-normal">TOURS</h6>
              </div>
              <div className="text-center  pe-5">
                <h1 className="fw-normal text-size">47</h1>
                <h6 className="fw-normal">DESTINATIONS</h6>
              </div>
              <div className="text-center">
                <h1 className="fw-normal text-size">10</h1>
                <h6 className="fw-normal">STAFF </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="d-flex justify-content-around align-iteams-center">
          <div className="d-flex">
            <div>
              <img src={about01} alt="" />
            </div>
            <div>
              <h6 className="text-secondary fw-light ps-4">
                Cruise ships are large passenger ships used mainly <br /> for
                vacationing. Unlike ocean liners, which are for <br />{" "}
                transport, they typically embark on the round-trip. <br />
                <span className="small1s-text text-light fw-normal p-1 ">
                  CRUISE
                </span>
              </h6>
            </div>
          </div>
          <div className="d-flex">
            <div>
              <img src={about02} alt="" />
            </div>
            <div>
              <h6 className="text-secondary fw-light ps-4">
                Only tour using reliable reference and having $100 <br />{" "}
                million (adjusted for inflation) have been added to <br /> the
                list. Some of the gross may be the of provide. <br />
                <span className="small2s-text text-light fw-normal p-1 ">
                  BEST TOURS
                </span>
              </h6>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-around align-iteams-center ps-4 pt-5 pb-3">
          <div className="d-flex">
            <div>
              <img src={about03} alt="" />
            </div>
            <div>
              <h6 className="text-secondary fw-light ps-4">
                Resort means a town which people visit for holiday <br /> and
                days out which usually contains hotels at which <br /> such
                holidaymakers stay. Examples is would include. <br />
                <span className="small3s-text text-light fw-normal p-1 ">
                  RESORTS
                </span>
              </h6>
            </div>
          </div>
          <div className="d-flex ps-4 ms-3">
            <div className="">
              <img src={about04} alt="" />
            </div>
            <div>
              <h6 className="text-secondary fw-light ps-4">
                Many maps are static, fixed to paper or some other <br />{" "}
                durable medium while other are dynamic interactive. <br />{" "}
                Although most commonly used depict and geography. <br />
                <span className="small4s-text text-light fw-normal p-1 ">
                  MAP GUIDES
                </span>
              </h6>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <button className="btn btn-outline-secondary m-5">
            CHECK ALL SERVICES
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

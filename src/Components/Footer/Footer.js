import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faFacebookSquare,  faInstagram, faLinkedin,  faTwitter, } from "@fortawesome/free-brands-svg-icons";
import { Button, Col, Form } from "react-bootstrap";



const Footer = () => {
  return (
    <div className="">
      <div className="news-latter">
        <div className="container d-flex justify-content-center px-5  text-white">
          <h2 className="px-5 mt-3">SIGN UP FOR NEWSLETTER</h2>
          <div className="px-5 flex-grow-1 d-flex g-4 ">
            <Form.Group as={Col} className="" controlId="formGridEmail">
              <Form.Control
                className="email-field w-60 shadow-none mt-3"
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Button variant="btn btn-outline-secondary py-2 px-4 m-3 me-2">
              SUBMIT
            </Button>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="d-flex ">
            <div className="footer-col">
              <h4 className="custom-padding company">company</h4>
              <ul>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/packages">Packages</Link>
                </li>
                <li>
                  <Link to="/about">about</Link>
                </li>
                <li>
                  <Link to="/contactus">Contact us</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="custom-padding Get">Get help</h4>
              <ul>
                <li>
                  <Link to="/">FAQ</Link>
                </li>
                <li>
                  <Link to="/myorders">My orders</Link>
                </li>
                <li>
                  <Link to="/notfound">Not Found</Link>
                </li>
                <li>
                  <Link to="/">Terms Conditions</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="custom-padding online">online shop</h4>
              <ul>
                <li>
                  <Link to="/">watch</Link>
                </li>
                <li>
                  <Link to="/">bag</Link>
                </li>
                <li>
                  <Link to="/">shoes</Link>
                </li>
                <li>
                  <Link to="/">dress</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col ">
              <h4 className="follow">follow us</h4>
              <div className="social-links">
                <Link to="/">
                  <FontAwesomeIcon icon={faFacebookSquare} size="lg" />
                </Link>
                <Link to="/">
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </Link>
                <Link to="/">
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </Link>
                <Link to="/">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </Link>
              </div>
            </div>
            </div>


          </div>
        </div>
      </footer>
      <div className="footer-color text-color text-center p-2 fw-light">
        <span> Developed By Muhammad Nurul Ahsan</span>
        <div>
          <span>© 2021 Best Travel Company | All rights reserved.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

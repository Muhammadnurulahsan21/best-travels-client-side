import React from "react";
import "./Header.css";
import useAuth from "./../../Hooks/UseAuth.js";
import logo from "../../img/logo.png";
import Payment from "../../img/icon-cards-white.png";
import check from "../../img/icon-check-white.png";
import avatar from "../../img/avatar.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneAlt,
  faSearch,
  faShoppingCart,
  faSignInAlt,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";

import {
  Button,
  ButtonGroup,
  Container,
  Dropdown,
  Navbar,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <div className="fixed-top">
      <div className="header-text d-flex align-items-center justify-content-evenly fw-light text-white px-4 ps-5">
        <div>
          <p className="mb-0 mt- pb-0 ms- ps-3">
            <img
              className="mb-1"
              width="25px"
              height="25px"
              src={Payment}
              alt=""
            />{" "}
            Payment Options
          </p>
        </div>
        <div>
          <p className="mb-0 pt-0 pb-0 ps- ms-">
            <img
              className="mb-2"
              width="20px"
              height="20px"
              src={check}
              alt=""
            />{" "}
            Terms Conditions
          </p>
        </div>
        <div>
          <p className="mb-0">BN</p>
        </div>
        <div>
          <p className="mb-0 pe-5 me-5">US</p>
        </div>

        <div className="text-end">
          <p className="mb-0 mt- pe-  pb- ps-5">
            <FontAwesomeIcon icon={faPhoneAlt} size="lg" /> Book Now: 800 123 45
            67
          </p>
        </div>

        <div className="d-flex px- text-white">
          {user.displayName ? (
            <div className="px-2 d-flex align-items-center custom-color mx-4">
              <div>
                <img
                  width="40px"
                  height="40px"
                  className="me-2 rounded-circle overflow-hidden"
                  src={avatar}
                  alt=""
                />
              </div>

              <div className="login-text">
                <h6 className="fw-light">{user.displayName}</h6>
              </div>
            </div>
          ) : (
            <div className="px-2 d-flex align-items-center custom-color mx-4 ">
              <div>
                <img
                  width="40px"
                  height="40px"
                  className="me-2 rounded-circle overflow-hidden"
                  src={avatar}
                  alt=""
                />
              </div>

              <div className="login-text">
                <small className="fw-lighter ">My Account</small> <br />
                <Link as={Link} to="/login" >
                <small className="fw-lighter cursor text-light">LOG IN </small>
              </Link>
              </div>
            </div>
          )}

          {!user.displayName && (
            <Link  as={Link}  to="/register">
              <h6 className="px-3 cursor custom-color text-light py-3 mb-0 fw-light mx-4">
                <FontAwesomeIcon
                  className="me-2"
                  icon={faArrowCircleRight}
                  size="lg"
                />
                Register
              </h6>
            </Link>
          )}

          {user.displayName && (
            <h6
              onClick={logOut}
              className="px-3 cursor custom-color py-3 mb-0 fw-light mx-4"
            >
              <FontAwesomeIcon className="me-2" icon={faSignInAlt} size="lg" />
              LOG OUT
            </h6>
          )}
        </div>
      </div>

      <div className="">
        <Navbar className="p-1 nav-color " expand="lg">
          <Container>
            <Navbar.Brand className="text-dark d-flex">
              <img
                src={logo}
                width="60px"
                height="60px"
                style={{ marginRight: "15px" }}
                alt="logo"
              />
              <span className="fs-2 mt-1">Best Travel</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <div className="custom-nav mx-auto ">
                <NavLink className="text-dark custom-navlink" to="/home">
                  Home <span className="text-muted p-3 fw-light">|</span>
                </NavLink>
                <NavLink
                  className="text-dark m-2 custom-navlink"
                  to="/Packages"
                >
                  Packages <span className="text-muted p-3 fw-light">|</span>
                </NavLink>
                <NavLink className="text-dark m-2 custom-navlink" to="/about">
                  About <span className="text-muted p-3 fw-light">|</span>
                </NavLink>
                <NavLink
                  className="text-dark m-2 custom-navlink"
                  to="/contactus"
                >
                  Contact Us
                </NavLink>
              </div>

              <div className="me-5">
                <FontAwesomeIcon className="ms-3" icon={faLinkedin} size="lg" />
                <FontAwesomeIcon className="ms-3" icon={faTwitter} size="lg" />
                <FontAwesomeIcon className="ms-3" icon={faFacebook} size="lg" />
                <FontAwesomeIcon
                  className="ms-3"
                  icon={faInstagram}
                  size="lg"
                />
                <FontAwesomeIcon className="ms-3" icon={faSearch} size="lg" />
                <FontAwesomeIcon
                  className="ms-3"
                  icon={faShoppingCart}
                  size="lg"
                />
              </div>

              {user.displayName && (
                <div>
                <Dropdown as={ButtonGroup}>
                  <Button variant="outline-info  py-2 px-1 fs-6">
                    <Link
                      className="dropdown text-dark py-2 px-3 fs-6"
                      to="/mybookings"
                    >
                      My Bookings
                    </Link>
                  </Button>
                  <Dropdown.Toggle split variant="outline-info" />

                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/addyourreview">
                      Add Your Review
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/manageallbookings">
                      Manage All Bookings
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              )}

            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};
export default Header;

import React, { useState } from "react";
import "./ContactUs.css";
import bgImg from "./../../img/contactside.jpg";
import phoneImg from "./../../img/phone.webp";
import emailImg from "./../../img/email.webp";
import locationImg from "./../../img/location.webp";
import { Button, Form, Col, Row, InputGroup } from "react-bootstrap";

const ContactUs = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <div className="custom-margin banner">
      <div className="bg-img text-center text-light ">
          <h2 className="contact-text">CONTACT US</h2>
          <h5 className="mt-5 pt-5">Home / Contact Us</h5>
          <h2 className="pt-3">Google Map in Our Location</h2>
        </div>

      <div>
        <div className="d-flex justify-content-between">
          <div className="bg-white p-5 text-dark text-start about1-div">
            <h2 className="pt-3 ps-5 ">Contact Details</h2> <hr />
            <h5 className="pt-1 ps-5 fw-light">
              That is why we give you access to 1000s of the finest used cars.{" "}
              <br /> Why we’ll work tirelessly to find you the best finance
              package
              <br /> And why we provide you with total peace of mind through.
            </h5>
            <div className="d-flex ps-5 pt-4">
              <div className="m-2">
                <img src={phoneImg} alt="" />
              </div>
              <div className="">
                <h6 className="text-info fs-5 fw-normal">Book Now:</h6>
                <h6 className=" fs-3 fw-normal">800 852 45 67</h6>
              </div>
            </div>
            <div className="d-flex ps-5 pt-4">
              <div className="m-2">
                <img src={emailImg} alt="" />
              </div>
              <div className="">
                <h6 className="text-info fs-5 fw-normal">Email</h6>
                <h6 className=" fs-3 fw-normal">info@rotorscars.com</h6>
              </div>
            </div>
            <div className="d-flex ps-5 pt-4">
              <div className="m-2">
                <img src={locationImg} alt="" />
              </div>
              <div className="">
                <h6 className="text-info fs-5 fw-normal">Address</h6>
                <h6 className=" fs-3 fw-normal">Shop 87/1, Dhanmondi, Dhaka</h6>
              </div>
            </div>
          </div>
          <div className="about2-div">
            <img width="759px" height="550px" src={bgImg} alt="" />
          </div>
        </div>
        <div>
          <div className="pt-5 ps-5 container d-flex align-items-center">
            <iframe
              title="google"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29217.71945050587!2d90.36978022433141!3d23.739713771073024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf4b984a4107%3A0x5f60cd7b443706da!2sBD%20Kitz!5e0!3m2!1sen!2sbd!4v1637118960944!5m2!1sen!2sbd"
              width="1240"
              height="700"
            ></iframe>
          </div>
          <Form
            className="container p-5 text-start"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter Your First name"
                  defaultValue=""
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter Your Last name"
                  defaultValue=""
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                <Form.Label>Username</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Enter Your Username"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a username.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your City"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid city.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom04">
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your State"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid state.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom05">
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Zip"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid zip.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Form.Group className="mb-3">
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
            <Button variant="secondary" type="submit">
              Submit form
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

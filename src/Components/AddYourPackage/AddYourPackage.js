import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "./AddYourPackage.css";

const AddYourPackage = () => {
  return (
    <div className="custom-margin">
      <div className="pb-5">
        <div className="addyourpackage-frist-banner text-light text-center">
          <h2 className="addyourpackage-text">Add Your Packages</h2>
          <div>
            <h4 className="pt-5 mt-5">Home / Packages</h4>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-center pb-5 ">Add a New Package</h2>
        <div className="container mb-5">
          <Form>
            <Row className="pb-3">
              <Form.Group as={Col}>
                <Form.Label>Package Name*</Form.Label>
                <Form.Control type="text" placeholder="Your Package Name" />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>City Name*</Form.Label>
                <Form.Control type="text" placeholder="Your City Name" />
              </Form.Group>
            </Row>
            <Row className="pb-3">
              <Form.Group as={Col}>
                <Form.Label>Continent*</Form.Label>
                <Form.Control type="text" placeholder="Your Continent Name" />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>City Special*</Form.Label>
                <Form.Control type="text" placeholder="City Special" />
              </Form.Group>
            </Row>
            <Row className="pb-3">
              <Form.Group as={Col}>
                <Form.Label>Package Price*</Form.Label>
                <Form.Control type="text" placeholder="Package Price" />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Discount*</Form.Label>
                <Form.Control type="text" placeholder="Discount Percentage" />
              </Form.Group>
            </Row>
            <Row className="pb-3">
              <Form.Group as={Col}>
                <Form.Label>Description*</Form.Label>
                <Form.Control type="text" placeholder="Description" />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Image URL*</Form.Label>
                <Form.Control type="text" placeholder="Image URL" />
              </Form.Group>
            </Row>
            <Button variant="primary" className="px-5" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddYourPackage;

import "./Register.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import loginUser from "./../../img/loginuser.png";
import RegisterImg from "./../../img/loginImg.png";

import useAuth from "./../../Hooks/UseAuth.js";
import { Link } from "react-router-dom";

const Register = () => {

  const { register, getEmail, getName, getPassword, error } = useAuth();
  return (
    <div className="custom-margin pt-3 d-flex justify-content-center">
      <div>
        <Container className="mt-3">
          <Row>
            <Col className=" ms-5" lg={4} md={6} sm={12}>
              <div className="text-center pb-2">
                <img height="100px" width="130px" src={loginUser} alt="" />
              </div>
              <Form onSubmit={register}>
                <Form.Group
                  className="mb-2 text-start"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    required
                    onBlur={getName}
                    type="type"
                    placeholder="Enter Your Full Name"
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group
                  className="mb-2 text-start"
                  controlId="formBasicEmail"
                >
                  <Form.Label htmlFor="email">Email Address</Form.Label>
                  <Form.Control
                    required
                    onBlur={getEmail}
                    type="email"
                    placeholder="Enter Your Email Address"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-2 text-start"
                  controlId="formBasicPassword"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    required
                    onBlur={getPassword}
                    type="password"
                    placeholder="Enter Your Password"
                  />
                </Form.Group>
                <div className="text-start">
                  <div className="form-check text-color">
                    <input
                      // onChange={toggleLogin}
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <Form.Group controlId="formBasicCheckbox">
                      <Link to="/login">
                        Already have an account? Please login!
                      </Link>
                    </Form.Group>
                  </div>
                </div>
                <p className="text-danger text-center">{error}</p>
                <div className="d-flex justify-content-center">
                <Button
                  type="submit"
                  className="btn btn-secondary py-2 px-5 mb-3 mt-3"
                >
                  Register
                </Button>
                </div>
              </Form>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <img
                className="ms-5 ps-5"
                height="550px"
                width="650px"
                src={RegisterImg}
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Register;

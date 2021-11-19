import { faCity, faGlobeAsia } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import useAuth from "../../Hooks/UseAuth";

import "./PackageDetails.css";

const PackageDetails = () => {
  const { packageKey } = useParams();
  const { user } = useAuth();
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const [packageDetails, setPackageDetails] = useState({});
  useEffect(() => {
    fetch(`https://frozen-ocean-73745.herokuapp.com/packages/${packageKey}`)
      .then((res) => res.json())
      .then((data) => setPackageDetails(data[0]));
  }, []);

  const onSubmit = (data) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const today = new Date();
    const orderDate = today.toLocaleDateString("en-US", options);
    data.orderStatus = "Pending";
    data.orderDate = orderDate;
    data.bookings = packageDetails;
    fetch("https://frozen-ocean-73745.herokuapp.com/bookings", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((orderInfo) => {
        if (orderInfo.insertedId) {
          swal({
            title: "Successfully Placed Order!",
            icon: "success",
            button: "OK!",
          });
          history.push(`/mybookings`);
        }
      });
  };

  return (
    <div className="bg-eee custom-margin">
      <div className="container pt-4 align-items-center">
        <div className="container pt-4">
          <h4 className="text-center">Enter Your Booking Details</h4>
        </div>
        <div className="row ">
          <div className="col-md-6 pt-5 pb-5">
            <div className="card">
              <img
                src={packageDetails.img}
                height="300px"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title fw-normal m-2">
                  <span className="fw-bold">Package Name:</span>{" "}
                  {packageDetails.name}
                </h5>
                <h6 className="card-text fw-normal m-2 mt-3">
                  <span className="fw-bold">Package Price:</span>{" "}
                  {packageDetails.price}
                </h6>
                <h6 className="card-text fw-normal m-2 mt-3">
                  <FontAwesomeIcon icon={faCity} size="lg" />{" "}
                  <span className="fw-bold">City Special:</span>{" "}
                  {packageDetails.city}
                </h6>
                <h6 className="card-text fw-normal m-2 mt-3">
                  <FontAwesomeIcon icon={faGlobeAsia} size="lg" />{" "}
                  <span className="fw-bold">Continent:</span>{" "}
                  {packageDetails.country}
                </h6>
                <h6 className="card-text fw-normal m-2 mt-3">
                  <span className="fw-bold">Package Description:</span>{" "}
                  {packageDetails.description}
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 pt-2 ">
            <form className="mt-4 w-75">
              <div className="mb-2">
                <label className="mb-2">Your Name*</label> <br />
                <input
                  className="form-control shadow-none"
                  type="text"
                  {...register("name", { required: true })}
                  defaultValue={user?.displayName}
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-2">
                <label className="mb-2">Email*</label> <br />
                <input
                  className="form-control shadow-none"
                  type="email"
                  {...register("email", {
                    required: true,
                  })}
                  value={user?.email}
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-2">
                <label className="mb-2">Address*</label> <br />
                <input
                  className="form-control shadow-none"
                  type="text"
                  {...register("address", {
                    required: true,
                  })}
                  placeholder="Dhaka, Bangladesh"
                />
              </div>
              <div className="mb-2">
                <label className="mb-2">City*</label> <br />
                <input
                  className="form-control shadow-none"
                  type="text"
                  {...register("city", {
                    required: true,
                  })}
                  placeholder="Mirpur"
                />
              </div>
              <div className="mb-2">
                <label className="mb-2">Zip Code*</label> <br />
                <input
                  className="form-control shadow-none"
                  type="text"
                  {...register("zip", {
                    required: true,
                  })}
                  placeholder="1216"
                />
              </div>
              <div className="mb-2">
                <label className="mb-2">Country*</label> <br />
                <input
                  className="form-control shadow-none"
                  type="text"
                  {...register("country", {
                    required: true,
                  })}
                  defaultValue="Bangladesh"
                  placeholder="Bangladesh"
                />
              </div>
              <div className="mb-2">
                <label className="mb-2">Phone (Optional)</label> <br />
                <input
                  className="form-control shadow-none"
                  type="number"
                  {...register("phone")}
                  placeholder="01XXXXXXXXX"
                />
              </div>
            </form>
            <div className="text-center pe-5 me-5 mb-5 mt-4">
              <Link onClick={handleSubmit(onSubmit)}>
                <button className="btn btn-outline-secondary w-50 pe-5 me-5 ps-5 me-5">
                  PLACE ORDER
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;

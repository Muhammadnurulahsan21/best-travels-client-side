// import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import "./AddYourPackage.css";

const AddYourPackage = () => {
  const { register, reset, handleSubmit } = useForm();

  const onSubmit = (data) => {
    fetch("https://frozen-ocean-73745.herokuapp.com/packages", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          swal({
            title: "Package Added Successfully!",
            // text: `Product Unique Key: ${pass}`,
            button: "OK!",
          });
        }
      });
    reset();
    console.log(data);
  };

  return (
    <div className="custom-margin bg-eee">
      <div className="pb-5">
        <div className="addyourpackage-frist-banner text-light text-center">
          <h2 className="addyourpackage-text">Add Your Packages</h2>
          <div>
            <h4 className="pt-5 mt-5">Home / Packages</h4>
          </div>
        </div>
      </div>
      <div>
        <div className="container pb-5">
          <div className="w-75 mx-auto pb-5">
            <div className="d-flex justify-content-center">
              <form className="mt-4 row" onSubmit={handleSubmit(onSubmit)}>
                <div className="col-12 col-md-6">
                  <div className="mb-2">
                    <label className="mb-2">Package Name*</label> <br />
                    <input
                      className="form-control shadow-none"
                      type="text"
                      {...register("name", { required: true })}
                      placeholder="Your Package Name"
                    />
                  </div>
                  <div className="mb-2">
                    <label className="mb-2">City Name</label> <br />
                    <input
                      className="form-control shadow-none"
                      type="text"
                      {...register("location", { required: true })}
                      placeholder="Your City Name"
                    />
                  </div>
                  <div className="mb-2">
                    <label className="mb-2">Continent*</label> <br />
                    <input
                      className="form-control shadow-none"
                      type="text"
                      {...register("country", { required: true })}
                      placeholder="Your Continent Name"
                    />
                  </div>
                  <div className="mb-2">
                    <label className="mb-2">City Special*</label> <br />
                    <input
                      className="form-control shadow-none"
                      type="text"
                      {...register("days", { required: true })}
                      placeholder="City Special"
                    />
                  </div>
                  
                </div>
                <div className="col-12 col-md-6">
                <div className="mb-2">
                    <label className="mb-2">Package Price*</label> <br />
                    <input
                      className="form-control shadow-none"
                      type="number"
                      {...register("price", {
                        required: true,
                      })}
                      placeholder="Package Price"
                    />
                  </div>
                  <div className="mb-2">
                    <label className="mb-2">Discount*</label> <br />
                    <input
                      className="form-control shadow-none"
                      type="number"
                      {...register("price", {
                        required: true,
                      })}
                      placeholder="Discount Percentage%"
                    />
                  </div>
                  <div className="mb-2">
                    <label className="mb-2">Description*</label> <br />
                    <input
                      className="form-control shadow-none"
                      type="number"
                      {...register("price", {
                        required: true,
                      })}
                      placeholder="Description"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="mb-2">Image URL</label> <br />
                    <input
                      className="form-control shadow-none"
                      type="text"
                      {...register("img1", {
                        required: true,
                      })}
                      placeholder="Img Should Be 600px * 600px"
                    />
                  </div>
                </div>
                <div className="text-center px-5 mt-3">
                  <Button variant="btn btn-outline-secondary">
                    Add Product
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddYourPackage;

import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import useAuth from "./../../Hooks/UseAuth";
import "./MyBookings.css";

const MyBookings = () => {
  const [bookings, setBookings] = useState();
  const { user } = useAuth();
  useEffect(() => {
    fetch(`https://frozen-ocean-73745.herokuapp.com/bookings?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  const handleDelete = (id) => {
    console.log(id);
    swal({
      title: "Are You Sure to Delete?",
      text: "If deleted, booking will be canceled!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://frozen-ocean-73745.herokuapp.com/orders/${id}`, {
          method: "DELETE",
          headers: { "content-type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              swal("Booking has been Canceled!", {
                icon: "success",
              });
            }
            const newBookings = bookings.filter(
              (booking) => booking._id !== id
            );
            setBookings(newBookings);
          });
      } else {
        swal("Booking Info is Safe!");
      }
    });
  };
  return (
    <div className="pb-5 custom-margin bg-eee">
      <div className="">
        <div className="bookings-frist-banner text-light text-center">
          <h2 className="mybookings-text">My Bookings</h2>
        </div>
      </div>
      <div className="container py-4 mt-5">
        <div className="row bg-white rounded shadow p-4">
          <div className="col-12 col-md-2">
            <h6 className="py-2 border-bottom cursor border-dark">
              My Profile
            </h6>
            <h6 className="py-2 border-bottom cursor border-dark">
              My Booking
            </h6>
            <h6 className="py-2 border-bottom cursor border-dark">
              Update Profile
            </h6>
            <h6 className="py-2 border-bottom cursor border-dark">Log Out</h6>
          </div>
          <div className="col-12 col-md-10 border-start">
            <table className="table">
              <thead>
                <tr className="text-center">
                  <th scope="col">#</th>
                  <th scope="col">Order ID</th>
                  <th scope="col">User Name</th>
                  <th scope="col">User Email</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {bookings?.map((order, index) => (
                  <tr className="text-center">
                    <th scope="roEDw">{index + 1}</th>
                    <td>{order?._id}</td>
                    <td>{order?.name}</td>
                    <td>{order?.email}</td>
                    <td>
                      {order?.orderStatus === "CONFIRM" ? (
                        <span className="badge bg-success">CONFIRMED</span>
                      ) : (
                        <span className="badge bg-warning">PENDING</span>
                      )}
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(order?._id)}
                        className="mx-1 btn btn-danger shadow-none py-1"
                      >
                        <FontAwesomeIcon icon={faTrashAlt} size="lg" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;

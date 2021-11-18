import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import useAuth from "./../../Hooks/UseAuth";
import "./MyBookings.css";

const MyBookings = () => {
  const [orders, setOrders] = useState();
  const { user } = useAuth();
  useEffect(() => {
    fetch(
      `https://wicked-wizard-56509.herokuapp.com/orders?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setOrders(data.orders));
  }, []);

  const handleDelete = (id) => {
    swal({
      title: "Are You Sure to Delete?",
      text: "If deleted, order will be canceled!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://wicked-wizard-56509.herokuapp.com/orders/${id}`, {
          method: "DELETE",
          headers: { "content-type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              swal("Order has been Canceled!", {
                icon: "success",
              });
            }
            const newOrders = orders.filter((order) => order._id !== id);
            setOrders(newOrders);
          });
      } else {
        swal("Order Info is Safe!");
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
            <h6 className="py-2 border-bottom cursor border-dark">My Profile</h6>
            <h6 className="py-2 border-bottom cursor border-dark">My Booking</h6>
            <h6 className="py-2 border-bottom cursor border-dark">Update Profile</h6>
            <h6 className="py-2 border-bottom cursor border-dark">Log Out</h6>
          </div>
          <div className="col-12 col-md-10 border-start">
            <table className="table">
              <thead>
                <tr className="text-center">
                  <th scope="col">#</th>
                  <th scope="col">Order ID</th>
                  <th scope="col">Total Items</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {orders?.map((order, index) => (
                  <tr className="text-center">
                    <th scope="roEDw">{index + 1}</th>
                    <td>{order?._id}</td>
                    <td>{order?.item?.cart.length}</td>
                    <td>
                      {order?.orderStatus === "CONFIRM" ? (
                        <span className="badge bg-success">CONFIRMED</span>
                      ) : (
                        <span className="badge bg-warning">PENDING</span>
                      )}
                    </td>
                    <td>
                      <Link to={`/order-received/${order._id}`}>
                        <button
                          className="mx-1 btn btn-info text-white shadow-none py-1"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="View Order"
                        >
                          <i className="far fa-eye"></i>
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(order._id)}
                        className="mx-1 btn btn-danger shadow-none py-1"
                      >
                        <i className="fas fa-trash-alt"></i>
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

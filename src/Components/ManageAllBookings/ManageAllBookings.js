import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import "./ManageAllBookings.css";

const ManageAllBookings = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("")
      .then((res) => res.json())
      .then((data) => setOrders(data.orders));
  }, []);
  const handleDelete = (id) => {
    swal({
      title: "Are You Sure to Delete?",
      text: "Once deleted, you will not be able to recover this order data!",
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
              swal("Order has been deleted!", {
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
    <div className="bg-eee pb-5 custom-margin">
      <div className="custom-margin">
        <div className="pb-5">
          <div className="manageallbookings-frist-banner text-light text-center">
            <h2 className="manageallbookings-text">Manage All Bookings</h2>
          </div>
        </div>
      </div>
      <div className="container py-4 ">
        <div className="row bg-white rounded shadow p-4">
          <div className="col-12 col-md-2">
            <h6 className="py-2 border-bottom cursor border-dark">Manage Orders</h6>
            <h6 className="py-2 border-bottom cursor border-dark">Manage Users</h6>
            <h6 className="py-2 border-bottom cursor border-dark">Add New Package</h6>
            <h6 className="py-2 border-bottom cursor border-dark">Update Package</h6>
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
                {orders?.map((order, index) => (
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
                      <Link to={`/update-order/${order?._id}`}>
                        <button
                          className="mx-1 btn btn-info text-white shadow-none py-1"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          <i className="fas fa-edit"></i>
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(order?._id)}
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

export default ManageAllBookings;

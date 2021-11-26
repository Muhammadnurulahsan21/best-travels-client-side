import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import "./ManageAllBookings.css";

const ManageAllBookings = () => {
  const [orders, setOrders] = useState();
  useEffect(() => {
    fetch(`https://frozen-ocean-73745.herokuapp.com/bookings`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  
  const handleDelete = (id) => {
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
            const newBookings = orders.filter(
              (booking) => booking._id !== id
            );
            setOrders(newBookings);
          });
      } else {
        swal("Booking Info is Safe!");
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
            <h6 className="py-2 border-bottom cursor border-dark">
              Manage Booking
            </h6>
            <h6 className="py-2 border-bottom cursor border-dark">
              Manage Users
            </h6>
            <h6 className="py-2 border-bottom cursor border-dark">
              Add New Package
            </h6>
            <h6 className="py-2 border-bottom cursor border-dark">
              Update Package
            </h6>
          </div>
          <div className="col-12 col-md-10 border-start">
            <table className="table">
              <thead>
                <tr className="text-center">
                  <th scope="col">#</th>
                  <th scope="col">Booking ID</th>
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

export default ManageAllBookings;

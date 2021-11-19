import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useFirebase from "../../UseFirebase/UseFirebase";
import "./MyBookings.css";

const MyBookings = () => {
  const { user } = useFirebase();
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [user?.email]);

  const handleCancel = (id) => {
    const proceed = window.confirm("Are you sure you want to delete");
    if (proceed) {
      const url = `http://localhost:5000/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remainingProducts = myOrders?.filter(
              (order) => order?._id !== id
            );
            setMyOrders(remainingProducts);
          }
        });
    }
  };
  return (
    <div className="py-5 custom-margin">
      <div className="container">
        <div>
          <h2 className="text-center">My Orders</h2>
        </div>
        <div className="mx-auto">
          <Table striped bordered responsive hover>
            <thead>
              <tr>
                <th>Product Id</th>
                <th>User Name</th>
                <th>Price</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {myOrders.map((order) => (
                <tr key={order._id}>
                  <td>{order?._id}</td>
                  <td>{order?.name}</td>
                  <td>{order?.price}</td>
                  <td>{order?.status}</td>
                  <td>
                    <button
                      onClick={() => handleCancel(order?._id)}
                      className="btn btn-danger ms-2"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import swal from "sweetalert";
// import useAuth from "./../../Hooks/UseAuth";
// import "./MyBookings.css";

// const MyBookings = () => {
//   const [bookings, setBookings] = useState();
//   const { user } = useAuth();
//   useEffect(() => {
//     fetch(
//       `http://localhost:5000/orders/${user?.email}`
//     )
//       .then((res) => res.json())
//       .then((data) => setBookings(data.orders));
//   }, [user?.email]);

//   const handleDelete = (id) => {
//     swal({
//       title: "Are You Sure to Delete?",
//       text: "If deleted, booking will be canceled!",
//       icon: "warning",
//       buttons: true,
//       dangerMode: true,
//     }).then((willDelete) => {
//       if (willDelete) {
//         fetch(`http://localhost:5000/orders/${id}`, {
//           method: "DELETE",
//           headers: { "content-type": "application/json" },
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             if (data.deletedCount > 0) {
//               swal("Booking has been Canceled!", {
//                 icon: "success",
//               });
//             }
//             const newBookings = bookings.filter((booking) => booking._id !== id);
//             setBookings(newBookings);
//           });
//       } else {
//         swal("Booking Info is Safe!");
//       }
//     });
//   };
//   return (
//     <div className="pb-5 custom-margin bg-eee">
//       <div className="">
//         <div className="bookings-frist-banner text-light text-center">
//           <h2 className="mybookings-text">My Bookings</h2>
//         </div>
//       </div>
//       <div className="container py-4 mt-5">
//         <div className="row bg-white rounded shadow p-4">
//           <div className="col-12 col-md-2">
//             <h6 className="py-2 border-bottom cursor border-dark">My Profile</h6>
//             <h6 className="py-2 border-bottom cursor border-dark">My Booking</h6>
//             <h6 className="py-2 border-bottom cursor border-dark">Update Profile</h6>
//             <h6 className="py-2 border-bottom cursor border-dark">Log Out</h6>
//           </div>
//           <div className="col-12 col-md-10 border-start">
//             <table className="table">
//               <thead>
//                 <tr className="text-center">
//                   <th scope="col">#</th>
//                   <th scope="col">Order ID</th>
//                   <th scope="col">Total Items</th>
//                   <th scope="col">Status</th>
//                   <th scope="col">Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {bookings?.map((booking, index) => (
//                   <tr className="text-center">
//                     <th scope="roEDw">{index + 1}</th>
//                     <td>{booking?._id}</td>
//                     <td>{booking?.item?.cart.length}</td>
//                     <td>
//                       {booking?.bookingStatus === "CONFIRM" ? (
//                         <span className="badge bg-success">CONFIRMED</span>
//                       ) : (
//                         <span className="badge bg-warning">PENDING</span>
//                       )}
//                     </td>
//                     <td>
//                       <Link to={`/booking-received/${booking._id}`}>
//                         <button
//                           className="mx-1 btn btn-info text-white shadow-none py-1"
//                           data-bs-toggle="tooltip"
//                           data-bs-placement="bottom"
//                           title="View booking"
//                         >
//                           <i className="far fa-eye"></i>
//                         </button>
//                       </Link>
//                       <button
//                         onClick={() => handleDelete(booking._id)}
//                         className="mx-1 btn btn-danger shadow-none py-1"
//                       >
//                         <i className="fas fa-trash-alt"></i>
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyBookings;

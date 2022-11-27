import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { FaAmazonPay } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      if (!user?.email) {
        return;
      }
      const response = await fetch(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await response.json();
      return data;
    },
  });

  return (
    <div>
      <h1 className="text-4xl mb-10">My orders</h1>
      <div className="">
        <table className="table table-zebra ">
          <thead>
            <tr>
              <th></th>
              <th>Buyer Name</th>
              <th>Car Name</th>
              <th>Price</th>
              <th>email</th>
              <th>Phone Number</th>
              <th>Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings &&
              bookings?.map((booking, i) => (
                <tr key={booking._id} className="hover">
                  <th>{i + 1}</th>
                  <td>{booking.buyerName}</td>
                  <td>{booking.carName}</td>
                  <td>{booking.resalePrice}</td>
                  <td>{booking.email}</td>
                  <td>{booking.phoneNumber}</td>
                  <td>{new Date().toDateString()}</td>
                  <td>
                    {booking.resalePrice && !booking.paid && (
                      <Link to={`/dashboard/payment/${booking._id}`}>
                        <button className="btn btn-secondary text-white text-2xl btn-sm">
                          <FaAmazonPay />
                        </button>
                      </Link>
                    )}
                    {booking.resalePrice && booking.paid && (
                      <span className="text-success">Paid</span>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;

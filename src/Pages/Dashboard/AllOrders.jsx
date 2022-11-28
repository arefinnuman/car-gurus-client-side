import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { FaAmazonPay } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const AllOrders = () => {
  const { user } = useContext(AuthContext);
  const url = `https://car-gurus-server-site.vercel.app/bookings`;

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings"],
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
      <h1 className="text-4xl mb-10">All orders</h1>
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

export default AllOrders;

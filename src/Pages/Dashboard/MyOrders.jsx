import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
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
      <h1 className="text-4xl mb-10">My Appointments</h1>
      <div className="">
        <table className="table ">
          <thead>
            <tr>
              <th></th>
              <th>Buyer Name</th>
              <th>Car Name</th>
              <th>Price</th>
              <th>email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, i) => (
              <tr key={booking._id} className="hover">
                <th>{i + 1}</th>
                <td>{booking.buyerName}</td>
                <td>{booking.carName}</td>
                <td>{booking.resalePrice}</td>
                <td>{booking.email}</td>
                <td>
                  <button className="btn btn-primary btn-sm">x</button>
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

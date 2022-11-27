import { useQuery } from "@tanstack/react-query";
import React from "react";

const ManageAllCars = ({}) => {
  const { data: cars } = useQuery({
    queryKey: ["cars"],
    queryFn: async () => {
      try {
        const response = await fetch("http://localhost:5000/buy-cars", {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await response.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <section>
      <h1>Manage All Cars</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Seller Name</th>
              <th>Original Price</th>
              <th>Resale Price</th>
              <th>Posting Time</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {cars?.map((car, i) => (
              <tr key={car._id}>
                <th>{i + 1}</th>
                <td>{car.name}</td>
                <td>{car.postedBy}</td>
                <td>{car.price}</td>
                <td>{car.resalePrice}</td>
                <td>{car.postedTime}</td>
                <td>{car.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ManageAllCars;

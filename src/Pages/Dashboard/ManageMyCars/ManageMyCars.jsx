import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";

const ManageMyCars = ({ postedBy }) => {
  const { user } = useContext(AuthContext);
  const { data: myCars } = useQuery({
    queryKey: ["myCars"],
    queryFn: async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/my-cars/${user?.displayName}`,
          {
            headers: {
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        const data = await response.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <section>
      <h1 className="mb-10 text-3xl">Manage My Cars</h1>
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
            {myCars?.map((car, i) => (
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

export default ManageMyCars;

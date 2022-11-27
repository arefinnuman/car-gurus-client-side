import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import Loader from "../../../Components/Loader";
import { AuthContext } from "../../../Context/AuthProvider";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";

const ManageMyCars = ({ postedBy }) => {
  const [deletingCar, setDeletingCar] = useState(null);

  const closeModal = () => {
    setDeletingCar(null);
  };

  const { user } = useContext(AuthContext);
  const {
    data: myCars,
    isLoading,
    refetch,
  } = useQuery({
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
  const handleDeleteCar = (car) => {
    fetch(`http://localhost:5000/buy-cars/${car._id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          console.log(data);
          refetch();
        }
      });
  };

  if (isLoading) {
    return <Loader />;
  }

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
              <th>Delete</th>
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
                <td>
                  <label
                    onClick={() => setDeletingCar(car)}
                    htmlFor="confirmation-modal"
                    className="btn btn-xs btn-error"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingCar && (
        <ConfirmationModal
          headingMessage={`Are you sure you want to delete`}
          message={`If you delete ${deletingCar.name}, It can't be recovered`}
          closeModal={closeModal}
          action={handleDeleteCar}
          modalData={deletingCar}
          successButtonName="Delete"
        ></ConfirmationModal>
      )}
    </section>
  );
};

export default ManageMyCars;

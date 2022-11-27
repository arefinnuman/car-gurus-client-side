import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Loader from "../../../Components/Loader";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";

const Buyer = () => {
  const {
    data: buyer = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["buyers"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users/buyers", {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  const [deletingBuyer, setDeletingBuyer] = useState(null);

  const closeModal = () => {
    setDeletingBuyer(null);
  };

  const handleDeleteBuyer = (user) => {
    fetch(`http://localhost:5000/buyers/${user._id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success("Delete Seller SuccessFull");
        }
      });
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <div>
        <h2 className="text-3xl">All users</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {buyer.map((user, i) => (
                <tr key={user._id}>
                  <th>{i + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <span className="badge badge-success p-2">{user.role}</span>
                  </td>
                  <td>
                    <label
                      onClick={() => setDeletingBuyer(user)}
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
        {deletingBuyer && (
          <ConfirmationModal
            headingMessage={`Are you sure you want to delete`}
            message={`If you delete ${deletingBuyer.name}, It can't be recovered`}
            closeModal={closeModal}
            action={handleDeleteBuyer}
            modalData={deletingBuyer}
            successButtonName="Delete"
          ></ConfirmationModal>
        )}
      </div>
    </div>
  );
};

export default Buyer;

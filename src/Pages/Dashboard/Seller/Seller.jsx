import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Loader from "../../../Components/Loader";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";

const Seller = () => {
  const {
    data: seller = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["sellers"],
    queryFn: async () => {
      const res = await fetch(
        "https://car-gurus-server-site.vercel.app/users/sellers",
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });

  const [deletingSeller, setDeletingSeller] = useState(null);

  const closeModal = () => {
    setDeletingSeller(null);
  };

  const handleDeleteSeller = (user) => {
    fetch(`https://car-gurus-server-site.vercel.app/users/${user._id}`, {
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
        <h2 className="text-3xl">Sellers</h2>
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
              {seller.map((user, i) => (
                <tr key={user._id}>
                  <th>{i + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <span className="badge badge-success p-2">{user.role}</span>
                  </td>
                  <td>
                    <label
                      onClick={() => setDeletingSeller(user)}
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
        {deletingSeller && (
          <ConfirmationModal
            headingMessage={`Are you sure you want to delete`}
            message={`If you delete ${deletingSeller.name}, It can't be recovered`}
            closeModal={closeModal}
            action={handleDeleteSeller}
            modalData={deletingSeller}
            successButtonName="Delete"
          ></ConfirmationModal>
        )}
      </div>
    </div>
  );
};

export default Seller;

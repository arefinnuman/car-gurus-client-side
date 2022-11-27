import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      const data = await res.json();
      return data;
    },
  });

  const handleMakeAdmin = (id) => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Make Admin SuccessFull");
          refetch();
        }
      });
  };

  const handleSeller = (id) => {
    fetch(`http://localhost:5000/users/seller/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Make Seller SuccessFull");
          refetch();
        }
      });
  };

  const handleMakeBuyer = (id) => {
    fetch(`http://localhost:5000/users/buyer/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Make Buyer SuccessFull");
          refetch();
        }
      });
  };

  return (
    <div>
      <h2 className="text-3xl">All users</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Seller</th>
              <th>Buyer</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user?.role !== "admin" ? (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="btn btn-xs"
                    >
                      Make Admin
                    </button>
                  ) : (
                    <span className="badge badge-success p-2">Admin</span>
                  )}
                </td>
                <td>
                  {user?.role !== "seller" ? (
                    <button
                      onClick={() => handleSeller(user._id)}
                      className="btn btn-xs"
                    >
                      Make Seller
                    </button>
                  ) : (
                    <span className="badge badge-success p-2">Seller</span>
                  )}
                </td>
                <td>
                  {user?.role !== "buyer" ? (
                    <button
                      onClick={() => handleMakeBuyer(user._id)}
                      className="btn btn-xs"
                    >
                      Make Buyer
                    </button>
                  ) : (
                    <span className="badge badge-secondary p-2">Buyer</span>
                  )}
                </td>
                <td>
                  <button className="btn btn-error btn-xs">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;

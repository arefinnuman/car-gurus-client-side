import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import { useBuyer } from "../Hooks/useBuyer";
import { useSeller } from "../Hooks/useSeller";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  const [isBuyer] = useBuyer(user?.email);
  return (
    <div>
      <Navbar />
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex ">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80  text-base-content">
            <li>
              {isBuyer ||
                (isAdmin && (
                  <>
                    <Link to="/dashboard">My Orders</Link>
                  </>
                ))}
            </li>

            <li>
              {isSeller && (
                <>
                  <Link to="/dashboard/sell-car">Sell Car</Link>
                </>
              )}
            </li>

            <li>
              {isSeller && (
                <>
                  <Link to="/dashboard/my-post">My Post</Link>
                </>
              )}
            </li>

            <li>
              {isAdmin && (
                <>
                  <Link to="/dashboard/all-users">All users</Link>
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

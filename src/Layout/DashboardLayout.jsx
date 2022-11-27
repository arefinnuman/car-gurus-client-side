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
                    <Link to="/dashboard">All Orders</Link>
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
                  <Link to="/dashboard/manage-my-cars">Manage My Cars</Link>
                </>
              )}
            </li>

            <li>
              {isAdmin && (
                <>
                  <Link to="/dashboard/all-buyers">All Buyers</Link>
                </>
              )}
            </li>
            <li>
              {isAdmin && (
                <>
                  <Link to="/dashboard/all-sellers">All Seller</Link>
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
            <li>
              {isAdmin && (
                <>
                  <Link to="/dashboard/manage-all-cars">Manage All Cars</Link>
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

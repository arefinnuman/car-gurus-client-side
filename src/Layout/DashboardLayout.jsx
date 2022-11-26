import React from "react";
import { Link, Outlet } from "react-router-dom";
// import { useAdmin } from "../hooks/UseAdmin";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  //   const { user } = useContext(AuthContext);
  //   const [isAdmin] = useAdmin(user?.email);
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
              <Link to="/dashboard">My Orders</Link>
            </li>
            {/* <li>
              {isAdmin && (
                <>
                  <Link to="/dashboard/all-users">All users</Link>
                </>
              )}
            </li>
            <li>
              {isAdmin && (
                <>
                  <Link to="/dashboard/add-doctor">Add a doctor</Link>
                </>
              )}
              {isAdmin && (
                <>
                  <Link to="/dashboard/manage-doctors">Manage Doctor</Link>
                </>
              )}
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logo.png";
import SecondaryOutlineButton from "../../../Components/SecondaryOutlineButton";

const Navbar = () => {
  const navBarItems = (
    <React.Fragment>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/cars">Cars</Link>
      </li>
    </React.Fragment>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navBarItems}
            </ul>
          </div>
          <Link to="/home" className="w-48">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{navBarItems}</ul>
        </div>
        <div className="navbar-end">
          <Link to="/sign-in">
            <SecondaryOutlineButton>Sign in</SecondaryOutlineButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

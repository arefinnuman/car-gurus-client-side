import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import MainLayout from "../../Layout/MainLayout";
import BuyCarCollection from "../../Pages/BuyCar/BuyCarCollection";
import AllUsers from "../../Pages/Dashboard/AllUsers";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import ManageAllCars from "../../Pages/Dashboard/ManageAllCars/ManageAllCars";
import ManageMyCars from "../../Pages/Dashboard/ManageMyCars/ManageMyCars";
import SellCar from "../../Pages/Dashboard/SellCar/SellCar";
import Home from "../../Pages/Home/Home";
import ErrorPage from "../../Pages/Shared/ErrorPage";
import SignIn from "../../Pages/Shared/SignIn/SignIn";
import SignUp from "../../Pages/Shared/SignUp/SignUp";
import AdminRoutes from "../Admin/AdminRoutes";
import PrivateRoute from "../Private/PrivateRoute";
import { SellerRoutes } from "../Seller/SellerRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/buy-car",
        element: <BuyCarCollection />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },

      {
        path: "/dashboard/sell-car",
        element: (
          <SellerRoutes>
            <SellCar />,
          </SellerRoutes>
        ),
      },

      {
        path: "/dashboard/manage-my-cars",
        element: (
          <SellerRoutes>
            <ManageMyCars />,
          </SellerRoutes>
        ),
      },

      {
        path: "/dashboard/all-users",
        element: (
          <AdminRoutes>
            <AllUsers />
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/manage-all-cars",
        element: (
          <AdminRoutes>
            <ManageAllCars />
          </AdminRoutes>
        ),
      },
    ],
  },
]);

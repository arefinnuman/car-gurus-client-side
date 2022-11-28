import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import MainLayout from "../../Layout/MainLayout";
import Blogs from "../../Pages/Blogs/Blogs";
import BuyCarCollection from "../../Pages/BuyCar/BuyCarCollection";
import AllUsers from "../../Pages/Dashboard/AllUsers";
import Buyer from "../../Pages/Dashboard/Buyer/Buyer";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import ManageAllCars from "../../Pages/Dashboard/ManageAllCars/ManageAllCars";
import ManageMyCars from "../../Pages/Dashboard/ManageMyCars/ManageMyCars";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import SellCar from "../../Pages/Dashboard/SellCar/SellCar";
import Seller from "../../Pages/Dashboard/Seller/Seller";
import CategorySection from "../../Pages/Home/Category/CategorySection";
import Home from "../../Pages/Home/Home";
import MyCart from "../../Pages/MyCart/MyCart";
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
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/buy-car/:category",
        element: <CategorySection />,
        loader: ({ params }) =>
          fetch(
            `https://car-gurus-server-site.vercel.app/buy-cars/${params.category}`
          ),
      },
      {
        path: "home/buy-car/:category",
        element: <CategorySection />,
        loader: ({ params }) =>
          fetch(
            `https://car-gurus-server-site.vercel.app/buy-cars/${params.category}`
          ),
      },
      {
        path: "/my-cart",
        element: <MyCart />,
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
        path: "/dashboard/payment/:id",
        element: <Payment />,
        loader: ({ params }) =>
          fetch(
            `https://car-gurus-server-site.vercel.app/bookings/${params.id}`
          ),
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
        path: "/dashboard/all-buyers",
        element: (
          <AdminRoutes>
            <Buyer />
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/all-sellers",
        element: (
          <AdminRoutes>
            <Seller />
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

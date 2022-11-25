import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import BuyCarCollection from "../../Pages/BuyCar/BuyCarCollection";
import Home from "../../Pages/Home/Home";
import ErrorPage from "../../Pages/Shared/ErrorPage";
import SignIn from "../../Pages/Shared/SignIn/SignIn";
import SignUp from "../../Pages/Shared/SignUp/SignUp";

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
]);

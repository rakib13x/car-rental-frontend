import { createBrowserRouter } from "react-router-dom";
import DashBoard from "../LayOut/DashBoard";
import Main from "../LayOut/Main";
import About from "../Pages/About/About";
import AllBookings from "../Pages/AllBookings/AllBookings";
import CarDetails2 from "../Pages/CarDetails2/CarDetails2";
import Cars from "../Pages/Cars/Cars";
import Checkout from "../Pages/CheckOut/CheckOut";
import Confirm from "../Pages/Confirm/Confirm";
import AllCars from "../Pages/Dashboard/Admin/AllCars/AllCars";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers/AllUsers";
import Demo from "../Pages/Demo/Demo";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Pages/Home/Home";
import MyBookings from "../Pages/MyBookings/MyBookings";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute";
import ProtectedRoute from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "about",
        element: (
          <ProtectedRoute>
            <About />
          </ProtectedRoute>
        ),
      },
      {
        path: "demo",
        element: (
          <AdminRoute>
            <Demo />
          </AdminRoute>
        ),
      },
      {
        path: "cars",
        element: <Cars />,
      },
      // {
      //   path: "cars/:carId",
      //   element: <CarDetails />,
      // },
      {
        path: "cars/:carId",
        element: <CarDetails2 />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "confirm",
        element: <Confirm />,
      },
      {
        path: "mybookings",
        element: (
          <ProtectedRoute>
            <MyBookings />
          </ProtectedRoute>
        ),
      },
      {
        path: "allbookings",
        element: (
          <AdminRoute>
            <AllBookings />
          </AdminRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashBoard />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "allbookings",
        element: <AllBookings />,
      },
      {
        path: "allusers",
        element: <AllUsers />,
      },
      {
        path: "allcars",
        element: <AllCars />,
      },
    ],
  },
]);

import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import About from "../Pages/About/About";
import CarDetails from "../Pages/CarDetails/CarDetails";
import Cars from "../Pages/Cars/Cars";
import Demo from "../Pages/Demo/Demo";
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
    // errorElement: <Error />,
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
      {
        path: "cars/:carId",
        element: <CarDetails />,
      },
      {
        path: "mybookings",
        element: (
          <ProtectedRoute>
            <MyBookings />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

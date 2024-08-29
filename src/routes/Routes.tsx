import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import About from "../Pages/About/About";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
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
        element: <About />,
      },
    ],
  },
]);

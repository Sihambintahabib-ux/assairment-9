import { createBrowserRouter } from "react-router";
import Home from "../page/Home";
import MyProfile from "../page/MyProfile";
import Services from "../page/Services";
import Errorpage from "../page/Errorpage";
import Login from "../page/Login";
import Signup from "../page/Signup.JSX";
import Updateprofile from "../page/Updateprofile";
import Forgetpassword from "../page/Forgetpassword";
import Root from "../page/Root";
import Homeservices from "../page/Homeservices";
import ServicesDetails from "../page/ServicesDetails";
import PrivateRoute from "../provider/PrivateRoute";
import Aboutus from '../page/Aboutus'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
      {
        index: true,
        path: "/",
        // element: <div>Hello World services</div>,
        element: <Home></Home>,
      },
      {
        path: "/homeservices",
        // element: <div>Hello World services</div>,
        element: <Homeservices></Homeservices>,
      },
      {
        path: "/services",
        // element: <div>Hello World services</div>,
        element: <Services></Services>,
      },
      {
        path: "/aboutus",
        // element: <div>Hello World Aboutus</div>,
        element: <Aboutus></Aboutus>,
      },
      {
        path: "/servicesdetails/:id",
        // element: <div>Hello World services details</div>,
        element: (
          <PrivateRoute>
            <ServicesDetails></ServicesDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/pet.json"),
      },
      {
        path: "/myprofile",
        // element: <div>Hello World profile</div>,
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>,
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        // element: <div>Hello World profile</div>,
        element: <Login></Login>,
      },
      {
        path: "/signup",
        // element: <div>Hello World profile</div>,
        element: <Signup></Signup>,
      },
      {
        path: "/forgetpassword",
        // element: <div>Hello World profile</div>,
        element: <Forgetpassword></Forgetpassword>,
      },
      {
        path: "/updateprofile",
        // element: <div>Hello World profile</div>,
        element: <Updateprofile></Updateprofile>,
      },
      {
        path: "*",
        // element: <div>Hello World profile</div>,
        element: <Errorpage></Errorpage>,
      },
    ],
  },
]);

export default router;
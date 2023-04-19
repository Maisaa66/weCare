import "./App.css";
import Button from "./components/UI/Buttons/Button";
// import Login from "./Pages/Login";
import NavBar from "./components/Layout/NavBar/NavBar";
import Footer from "./components/Layout/Footer/Footer";
import Home from "./components/Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import CheckUser from "./Pages/CheckUser/CheckUser";
// import ProgressBar from "./components/UI/ProgressBar/ProgressBar";
import StepOne from "./Pages/Signup/Step1";
import StepTwo from "./Pages/Signup/Step2";
// import FileUpload from "./components/UI/FileUpload.js/FileUpload";
import StepThree from "./Pages/Signup/Step3";
import TextField from "@mui/material/TextField";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
    children: [
      {
        path: "stepone",
        element: <StepOne />,
      },
    ],
  },
  {
    path: "/checkuser",
    element: <CheckUser />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <Outlet />
      {/* <Home></Home> */}
      {/* <FileUpload></FileUpload> */}
      {/* <Login></Login> */}
      {/* <Signup></Signup> */}
      {/* <StepOne></StepOne> */}
      {/* <StepThree></StepThree> */}
      {/* <StepTwo></StepTwo> */}
      {/* <Footer></Footer> */}
      {/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}
    </div>
  );
}

export default App;

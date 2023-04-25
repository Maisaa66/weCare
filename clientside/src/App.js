import "./App.css";
import Button from "./components/UI/Buttons/Button";
// import Login from "./Pages/Login";
// import FileUpload from "./components/UI/FileUpload.js/FileUpload";
import NavBar from "./components/Layout/NavBar/NavBar";
import Footer from "./components/Layout/Footer/Footer";
import Home from "./components/Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import CheckUser from "./Pages/CheckUser/CheckUser";
import StepOne from "./Pages/Signup/Step1";
import StepTwo from "./Pages/Signup/Step2";
import StepThree from "./Pages/Signup/Step3";
import TextField from "@mui/material/TextField";
import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from 'react-redux'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AdmindashBoard from "./components/AdminDashBoard/AdmindashBoard";
import Users from "./components/AdminDashBoard/Main/Users/Users";
import AllRequests from "./components/AdminDashBoard/Main/AllRequests/AllRequests";
import SP from "./components/AdminDashBoard/Main/SP/SP";
import store from "./Redux/Store";
const router = createBrowserRouter([
  {path:"/admin",element:<AdmindashBoard/>,children:[
    {path:'allusers',element:<Users></Users>},
    {path:'allreq',element:<AllRequests/>},
    {path:'allsp',element:<SP/>}
  ]},
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
  <Provider store={store}>
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
  </Provider>
  
  );
}

export default App;

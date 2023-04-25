import React from "react";
import classes from "./AdminDashBoard.module.css";
import Main from "./Main/Main";
import Nav from "./Nav/Nav";
import SP from "./Main/SP/SP";
import Users from "./Main/Users/Users";
import AllRequests from "./Main/AllRequests/AllRequests";
import * as ReactDOM from "react-dom";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AllDetails from "./Main/AllDetails/AllDetails";
import Update from "./Main/Update/Update";
// const routers=createBrowserRouter([
//   {path:'/admin',Component:<Nav></Nav>,children:[
//     {path:'/allusers',Component:<Users/>}
//   ]}
// ])
function AdmindashBoard() {
  return (
    <div className={`${classes.box} d-flex px-5 overflow-hidden align-items-center`}>
      
      <div className={`shadow-lg bg-white rounded-5  ${classes.dashboard}`}>
        <Nav></Nav>
        <div className="row container-fluid py-4">
          {/* <div className={`col-lg-2  col-6 ${classes.hit}`}>
            <Aside></Aside>
          </div> */}
          <div className="col-12">
            <Outlet/>
            {/* <Update/> */}
            {/* <AllDetails></AllDetails> */}
            </div>
        </div>
      </div>
    </div>
  );
}

export default AdmindashBoard;

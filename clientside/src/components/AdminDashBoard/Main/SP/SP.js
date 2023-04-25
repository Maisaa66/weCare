import React, { useState } from "react";
import Aside from "../../Aside/Aside";
export default function SP() {
  let [flag,setflag]=useState(true)
    return (
    <div>
      <div className="row">
        <div className="col-2">
          <ul class="nav nav-tabs ">
            <li class="nav-item  col-5">
              <a className={flag?'text-main shadow-sm rounded-pill px-2':'text-muted'} onClick={()=>{
                setflag(true)
              }}>
                Top 5
              </a>
            </li>
            <li class="nav-item col-6">
              <a className={flag?'text-muted':'text-main shadow-sm rounded-pill px-2'}  onClick={()=>{
                setflag(false)
              }}>
                Worst 5
              </a>
            </li>
          </ul>
          {flag ? (
            <div>
              <div className="m-3 col-12 d-flex p-2 align-items-center bg-white rounded-5 shadow-sm">
                <i className="px-3">img</i>
                <div className="text-start">
                  <h6 className="fs-12">name</h6>
                  <div className="ratingBox">
                    <p>
                      4.9{" "}
                      <i className=" ps-1 text-warning fa-solid fa-star"></i>
                    </p>
                  </div>
                </div>
              </div>
              <div className="m-3 col-12 d-flex p-2 align-items-center bg-white rounded-5 shadow-sm">
                <i className="px-3">img</i>
                <div className="text-start">
                  <h6 className="fs-12">name</h6>
                  <div className="ratingBox">
                    <p>
                      4.9{" "}
                      <i className=" ps-1 text-warning fa-solid fa-star"></i>
                    </p>
                  </div>
                </div>
              </div>
              <div className="m-3 col-12 d-flex p-2 align-items-center bg-white rounded-5 shadow-sm">
                <i className="px-3">img</i>
                <div className="text-start">
                  <h6 className="fs-12">name</h6>
                  <div className="ratingBox">
                    <p>
                      4.9{" "}
                      <i className=" ps-1 text-warning fa-solid fa-star"></i>
                    </p>
                  </div>
                </div>
              </div>
              <div className="m-3 col-12 d-flex p-2 align-items-center bg-white rounded-5 shadow-sm">
                <i className="px-3">img</i>
                <div className="text-start">
                  <h6 className="fs-12">name</h6>
                  <div className="ratingBox">
                    <p>
                      4.9{" "}
                      <i className=" ps-1 text-warning fa-solid fa-star"></i>
                    </p>
                  </div>
                </div>
              </div>
              <div className="m-3 col-12 d-flex p-2 align-items-center bg-white rounded-5 shadow-sm">
                <i className="px-3">img</i>
                <div className="text-start">
                  <h6 className="fs-12">name</h6>
                  <div className="ratingBox">
                    <p>
                      4.9{" "}
                      <i className=" ps-1 text-warning fa-solid fa-star"></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
            <div className="m-3 col-12 d-flex p-2 align-items-center bg-white rounded-5 shadow-sm">
              <i className="px-3">img</i>
              <div className="text-start">
                <h6 className="fs-12">name</h6>
                <div className="ratingBox">
                  <p>
                    2{" "}
                    <i className=" ps-1 text-warning fa-solid fa-star"></i>
                  </p>
                </div>
              </div>
            </div>
            <div className="m-3 col-12 d-flex p-2 align-items-center bg-white rounded-5 shadow-sm">
              <i className="px-3">img</i>
              <div className="text-start">
                <h6 className="fs-12">name</h6>
                <div className="ratingBox">
                  <p>
                    2{" "}
                    <i className=" ps-1 text-warning fa-solid fa-star"></i>
                  </p>
                </div>
              </div>
            </div>
            <div className="m-3 col-12 d-flex p-2 align-items-center bg-white rounded-5 shadow-sm">
              <i className="px-3">img</i>
              <div className="text-start">
                <h6 className="fs-12">name</h6>
                <div className="ratingBox">
                  <p>
                    2.3{" "}
                    <i className=" ps-1 text-warning fa-solid fa-star"></i>
                  </p>
                </div>
              </div>
            </div>
            <div className="m-3 col-12 d-flex p-2 align-items-center bg-white rounded-5 shadow-sm">
              <i className="px-3">img</i>
              <div className="text-start">
                <h6 className="fs-12">name</h6>
                <div className="ratingBox">
                  <p>
                    2.3{" "}
                    <i className=" ps-1 text-warning fa-solid fa-star"></i>
                  </p>
                </div>
              </div>
            </div>
            <div className="m-3 col-12 d-flex p-2 align-items-center bg-white rounded-5 shadow-sm">
              <i className="px-3">img</i>
              <div className="text-start">
                <h6 className="fs-12">name</h6>
                <div className="ratingBox">
                  <p>
                    2.1{" "}
                    <i className=" ps-1 text-warning fa-solid fa-star"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>

          )}
        </div>
        <div className="col-10">
          <h6 className="text-main text-start">All Service providers</h6>
          <div className="h-500 overflow-scroll">
            <table class="table bg-white rounded-5 text-start  shadow-sm p-1 my-2 ">
              <thead>
                <tr>
                  <th>Profile</th>
                  <th>First</th>
                  <th>Last</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>ِAll Details</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>
                    <button className="btn btn-warning">All Details</button>
                  </td>

                  <td>
                    <button className="btn btn-success">Update</button>
                  </td>
                  <td>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>
                    <button className="btn btn-warning">All Details</button>
                  </td>

                  <td>
                    <button className="btn btn-success">Update</button>
                  </td>
                  <td>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>
                    <button className="btn btn-warning">All Details</button>
                  </td>

                  <td>
                    <button className="btn btn-success">Update</button>
                  </td>
                  <td>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>
                    <button className="btn btn-warning">All Details</button>
                  </td>

                  <td>
                    <button className="btn btn-success">Update</button>
                  </td>
                  <td>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>
                    <button className="btn btn-warning">All Details</button>
                  </td>

                  <td>
                    <button className="btn btn-success">Update</button>
                  </td>
                  <td>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>
                    <button className="btn btn-warning">All Details</button>
                  </td>

                  <td>
                    <button className="btn btn-success">Update</button>
                  </td>
                  <td>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>
                    <button className="btn btn-warning">All Details</button>
                  </td>

                  <td>
                    <button className="btn btn-success">Update</button>
                  </td>
                  <td>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>
                    <button className="btn btn-warning">All Details</button>
                  </td>

                  <td>
                    <button className="btn btn-success">Update</button>
                  </td>
                  <td>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row">
            <button className="mybtn btnSecSolid col-1 fs-6 m-1">Nurses</button>
            <button className="mybtn btnSecSolid col-1 fs-6 m-1">Autism Sp</button>
            <button className="mybtn btnSecSolid col-1 fs-6 m-1">Companions</button>
            <button className="mybtn btnSecSolid col-1 fs-6 m-1">Doctors</button>
          </div>
        </div>
        {/* <div className="col-3 ">
          <div className="bg-white rounded-5 shadow-sm p-1">
            <h5 className="text-center">Top 5 SP</h5>
            <hr className="w-100" />
            <ul className="text-start">
              <div>
                <li className="d-flex align-items-center">
                  <img className="px-2 rounded-circle w-25" src="" />
                  <div className="text-start">
                    <h6>name</h6>
                    <p>rating</p>
                  </div>
                </li>
                <hr className="w-50 m-auto " />
              </div>
            </ul>
          </div>
          <div className="bg-white rounded-5 shadow-sm p-1 mt-3">
            <h5 className="text-center">worst 5 SP</h5>
            <hr className="w-100" />
            <ul className="text-start">
              <div>
                <li className="d-flex align-items-center">
                  <img className="px-2 rounded-circle w-25" src="" />
                  <div className="text-start">
                    <h6>name</h6>
                    <p>rating</p>
                  </div>
                </li>
                <hr className="w-50 m-auto " />
              </div>
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  );
}

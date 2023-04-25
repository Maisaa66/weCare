import React from "react";
import img from "../../../../assets/images/fff.png";

export default function () {
  return (
    <>
      <div className="d-flex w-50 align-items-center m-auto p-3">
        <img src={img} className="w-25"/>
        <h3 className="text-main ps-3 ">Norhan ahmed </h3>
      </div>
      <ul class="list-group text-start w-75 m-auto">
        <li class="list-group-item">
          <span className="text-main pe-2">ID: </span>6442b00148f55dabfb11cfbb
        </li>
        <li class="list-group-item">
          <span className="text-main pe-2">Phone number: </span>+201234567891
        </li>
        <li class="list-group-item">
          <span className="text-main pe-2">Email: </span>nour123@am.com
        </li>
        <li class="list-group-item">
          <span className="text-main pe-2">Gender: </span>female
        </li>
        <li class="list-group-item">
          <span className="text-main pe-2">Rating : </span>4.9
        </li>
        <li class="list-group-item">
          <span className="text-main pe-2">NationalID: </span>p.jpg
        </li>
        <li class="list-group-item">
          <span className="text-main pe-2">Number of requests: </span>6
        </li>
      </ul>
    </>
  );
}

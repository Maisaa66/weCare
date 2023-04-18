import * as React from "react";
import classes from "./BetterLiving.module.css";
import BTImg from "../../../assets/images/patient.jpg";
import { CheckCircle } from "react-bootstrap-icons";
const BetterLiving = () => {

  return (
    <div className="container">
    <div className="row py-5">
        <div className={`col-lg-6 overflow-hidden bg-danger ${classes.betterLivingInfo}`}>
        </div>
        <div className="col-lg-6 text-start ps-4">
            <h3 className="fs-1 py-2 fw-bolder">
            First Step Towards<span className={`${classes.spanHeading}`}>Better Living</span>{" "}
            </h3>
            <p className="py-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio,
            nostrum! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Odio, nostrum!
            </p>
            <ul className="py-2 list-unstyled">
            <li>
                <CheckCircle className={`${classes.CheckCircle} fs-3 pe-2`}></CheckCircle>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi.
            </li>
            <li>
            <CheckCircle className={`${classes.CheckCircle} fs-3 pe-2`}></CheckCircle>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi.
            </li>
            <li>
            <CheckCircle className={`${classes.CheckCircle} fs-3 pe-2`}></CheckCircle>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi.
            </li>
            <li>
            <CheckCircle className={`${classes.CheckCircle} fs-3 pe-2`}></CheckCircle>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi.
            </li>
            </ul>
            <button className=" mybtn mybtnMainSolid">
            See more
            </button>
        </div>
    </div>
    </div>

    
  );
};

export default BetterLiving;

import React from "react";

import Service from "../Service/Service";
import classes from "./ServiceSection.module.css";

const ServiceSection = () => {
  return (
    <div className="container">
      <h1 className={`${classes.head_width}`}>
        Everything Is <span className={classes.colorized}>Do Driven</span> By Services
      </h1>
      <div className={`d-flex flex-column flex-md-row align-items-center justify-content-md-around mt-5`}>
        <Service />
        <Service />
        <Service />
      </div>
    </div>
  );
};

export default ServiceSection;

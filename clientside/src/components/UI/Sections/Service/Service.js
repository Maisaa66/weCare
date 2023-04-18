import React from "react";

import classes from "./Service.module.css";

const Service = () => {
  return (
    <div className={`${classes.card} d-flex flex-column justify-content-around`}>
      <div className="icon">
        <div className={`${classes.icon_container}`}>
          <i className={`fa-solid fa-user-nurse ${classes.icon_size}`}></i>
        </div>
      </div>
      <h3 className={classes.header}>Senior Care</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    </div>
  );
};

export default Service;

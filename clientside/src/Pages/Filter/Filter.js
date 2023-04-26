import React, { useEffect, useState } from "react";
import Select from "./Select/Select";
import axios from "axios";
import classes from "./Filter.module.css";

const Filter = () => {
  // useEffect(() => {
  //   const allData = async () => {
  //     const res = await axios.get("http://localhost:7000/api/v1/providers");
  //     console.log(res.data.data.providers);
  //     // setData(res.data);
  //   };
  //   allData();
  // }, []);

  return (
    <div className={`mt-5 container  py-4 ${classes.filter} shadow`}>
      <h1>Filter</h1>
      <div className="row">
        <Select size="col-3" defaultText="Rate" values={["+4", "+3", "+2", "+1"]}></Select>
        <Select size="col-3" defaultText="Price" values={["High-to-Low", "Low-to-High"]}></Select>
        <Select size="col-3" defaultText="Gender" values={["Male", "Female"]}></Select>
        <Select size="col-3" defaultText="Location" values={["Cairo", "Alexandria"]}></Select>
        <div className="d-flex justify-content-center">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Night Shift
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;

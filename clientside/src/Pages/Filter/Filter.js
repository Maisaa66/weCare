import React, { useEffect, useState } from "react";
import Select from "./Select/Select";
import axios from "axios";
import classes from "./Filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setProviderData } from "../../Redux Store/slices/providerSlice";

const Filter = () => {
  // useEffect(() => {
  //   const allData = async () => {
  //     const res = await axios.get("http://localhost:7000/api/v1/providers");
  //     console.log(res.data.data.providers);
  //     // setData(res.data);
  //   };
  //   allData();
  // }, []);

  const dispatch = useDispatch();

  const rateHandler = (e) => {
    console.log(e.target.value[1]);
    axios
      .get(`http://localhost:7000/api/v1/providers?rating[gte]=${e.target.value[1]}`)
      .then((res) => {
        // console.log(res.data.data.providers);
        dispatch(setProviderData(res.data.data.providers));
      });
  };

  const priceHandler = (e) => {
    // console.log(e.target.value);
    if (e.target.value === "High-to-Low") {
      axios.get(`http://localhost:7000/api/v1/providers?sort=-hourlyRate`).then((res) => {
        // console.log(res.data.data.providers);
        dispatch(setProviderData(res.data.data.providers));
      });
    } else if (e.target.value === "Low-to-High") {
      axios.get(`http://localhost:7000/api/v1/providers?sort=hourlyRate`).then((res) => {
        // console.log(res.data.data.providers);
        dispatch(setProviderData(res.data.data.providers));
      });
    }
  };

  const genderHandler = (e) => {
    // console.log(e.target.value);
    axios
      .get(`http://localhost:7000/api/v1/providers?gender=${e.target.value.toLowerCase()}`)
      .then((res) => {
        // console.log(res.data.data.providers);
        dispatch(setProviderData(res.data.data.providers));
      });
  };

  const locationHandler = (e) => {
    // console.log(e.target.value);
    axios
      .get(`http://localhost:7000/api/v1/providers?address.governate=${e.target.value}`)
      .then((res) => {
        console.log(res.data.data.providers);
        dispatch(setProviderData(res.data.data.providers));
      });
  };

  const nsHandler = (e) => {
    // console.log(e.target.checked);
    axios
      .get(`http://localhost:7000/api/v1/providers?nightShift=${e.target.checked}`)
      .then((res) => {
        console.log(res.data.data.providers);
        dispatch(setProviderData(res.data.data.providers));
      });
  };

  return (
    <div className={`mt-5 container  py-4 ${classes.filter} shadow`}>
      <h1>Filter</h1>
      <div className="row">
        <Select
          size="col-3"
          defaultText="Rate"
          values={["+4", "+3", "+2", "+1"]}
          onChange={rateHandler}
        ></Select>
        <Select
          size="col-3"
          defaultText="Price"
          values={["High-to-Low", "Low-to-High"]}
          onChange={priceHandler}
        ></Select>
        <Select
          size="col-3"
          defaultText="Gender"
          values={["Male", "Female"]}
          onChange={genderHandler}
        ></Select>
        <Select
          size="col-3"
          defaultText="Location"
          values={["Cairo", "Alexandria"]}
          onChange={locationHandler}
        ></Select>
        <div className="d-flex justify-content-center">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={nsHandler}
            />
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

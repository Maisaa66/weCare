import React, { useEffect, useState } from "react";
import Select from "./Select/Select";
import axios from "axios";
import classes from "./Filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  resetQuries,
  setGenderQuery,
  setLocationQuery,
  setNightShiftQuery,
  setPriceQuery,
  setProviderData,
  setRateQuery,
} from "../../Redux Store/slices/providerSlice";

const Filter = () => {
  const dispatch = useDispatch();

  const providerType = useSelector((state) => state.provider.type);
  const rateQuery = useSelector((state) => state.provider.rateQuery);
  const priceQuery = useSelector((state) => state.provider.priceQuery);
  const ganderQuery = useSelector((state) => state.provider.genderQuery);
  const locationQuery = useSelector((state) => state.provider.locationQuery);
  const nightShiftQuery = useSelector((state) => state.provider.nightShiftQuery);

  useEffect(() => {
    dispatch(resetQuries());
  }, []);

  const rateHandler = (e) => {
    // console.log(e.target.value[1]);
    dispatch(setRateQuery(e.target.value[1]));
    // axios
    //   .get(
    //     `http://localhost:7000/api/v1/providers?rating[gte]=${
    //       e.target.value[1]
    //     }&serviceType=${providerType.toLowerCase()}`
    //   )
    //   .then((res) => {
    //     dispatch(setProviderData(res.data.data.providers));
    //   });
  };

  const priceHandler = (e) => {
    // console.log(e.target.value);
    if (e.target.value === "High-to-Low") {
      dispatch(setPriceQuery("-hourlyRate"));
      // axios
      // .get(
      //   `http://localhost:7000/api/v1/providers?sort=-hourlyRate&serviceType=${providerType.toLowerCase()}`
      // )
      // .then((res) => {
      //   // console.log(res.data.data.providers);
      //   dispatch(setProviderData(res.data.data.providers));
      // });
    } else if (e.target.value === "Low-to-High") {
      dispatch(setPriceQuery("hourlyRate"));
      // axios
      //   .get(
      //     `http://localhost:7000/api/v1/providers?sort=hourlyRate&serviceType=${providerType.toLowerCase()}`
      //   )
      //   .then((res) => {
      //     // console.log(res.data.data.providers);
      //     dispatch(setProviderData(res.data.data.providers));
      //   });
    }
  };

  const genderHandler = (e) => {
    dispatch(setGenderQuery(e.target.value.toLowerCase()));
    // console.log(e.target.value);
    // axios
    //   .get(
    //     `http://localhost:7000/api/v1/providers?gender=${e.target.value.toLowerCase()}&serviceType=${providerType.toLowerCase()}`
    //   )
    //   .then((res) => {
    //     // console.log(res.data.data.providers);
    //     dispatch(setProviderData(res.data.data.providers));
    //   });
  };

  const locationHandler = (e) => {
    dispatch(setLocationQuery(e.target.value));
    // console.log(e.target.value);
    // axios
    //   .get(
    //     `http://localhost:7000/api/v1/providers?address.governate=${
    //       e.target.value
    //     }&serviceType=${providerType.toLowerCase()}`
    //   )
    //   .then((res) => {
    //     console.log(res.data.data.providers);
    //     dispatch(setProviderData(res.data.data.providers));
    //   });
  };

  // nightshift
  const nsHandler = (e) => {
    dispatch(setNightShiftQuery(e.target.checked));
    // console.log(e.target.checked);
    // axios
    //   .get(
    //     `http://localhost:7000/api/v1/providers?nightShift=${
    //       e.target.checked
    //     }&serviceType=${providerType.toLowerCase()}`
    //   )
    //   .then((res) => {
    //     console.log(res.data.data.providers);
    //     dispatch(setProviderData(res.data.data.providers));
    //   });
  };

  const filterHandler = () => {
    // console.log(rateQuery);
    // console.log(priceQuery);
    // console.log(ganderQuery);
    // console.log(locationQuery);
    // console.log(nightShiftQuery);
    axios
      .get(
        `http://localhost:7000/api/v1/providers?serviceType=${providerType.toLowerCase()}${
          rateQuery ? `&rating[gte]=${rateQuery}` : ""
        }${priceQuery ? `&sort=${priceQuery}` : ""}${ganderQuery ? `&gender=${ganderQuery}` : ""}${
          locationQuery ? `&address.governate=${locationQuery}` : ""
        }${nightShiftQuery ? `&nightShift=${nightShiftQuery}` : ""}`
      )
      .then((res) => {
        // console.log(res.data.data.providers);
        const providers = res.data.data.providers;
        const data = providers.filter((provider) => {
          return provider.status === "approved";
        });
        // console.log(data);
        dispatch(setProviderData(data));
      });
  };

  return (
    <>
      <div className={`mt-5 container  py-4 ${classes.filter} shadow`}>
        <h1>Filter</h1>
        <div className="row d-flex flex-column flex-md-row">
          <Select
            size="col-6 col-md-3"
            defaultText="Rate"
            values={["+4", "+3", "+2", "+1"]}
            onChange={rateHandler}
          ></Select>
          <Select
            size="col-6 col-md-3"
            defaultText="Price"
            values={["High-to-Low", "Low-to-High"]}
            onChange={priceHandler}
          ></Select>
          <Select
            size="col-6 col-md-3"
            defaultText="Gender"
            values={["Male", "Female"]}
            onChange={genderHandler}
          ></Select>
          <Select
            size="col-6 col-md-3"
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
        <button className="btn btn-primary mt-2" onClick={filterHandler}>
          Apply
        </button>
      </div>
    </>
  );
};

export default Filter;

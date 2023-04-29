import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProviderType, setProviderData } from "../../Redux Store/slices/providerSlice";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Filter from "../Filter/Filter";
import ProviderCard from "./ProviderCard/ProviderCard";

const Provider = () => {
  // Get the provider type from the URL
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const provider = query.get("provider");

  // state for checking if the data is loaded or not
  const [loading, setLoading] = useState(true);

  // Redux
  const dispatch = useDispatch();
  const data = useSelector((state) => state.provider.providersData);
  // console.log("data", data);

  useEffect(() => {
    axios
      .get(`http://localhost:7000/api/v1/providers?serviceType=${provider.toLowerCase()}`)
      .then((res) => {
        // setData(res.data.data.providers);

        // set the provider type and data in the redux store to be used in the filter component
        dispatch(setProviderType(provider));
        dispatch(setProviderData(res.data.data.providers));
        setLoading(false);
      });
  }, []);

  // if provider data is not loaded yet, show a spinner
  if (loading)
    return (
      <div className="spinner-grow text-success mt-5" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );

  if (!data.length) {
    return (
      <>
        <h1 className="text-center mt-5">{provider}</h1>
        <Filter />
        <div className="container">
          <div className="row mt-5">
            <h1 className="text-center">No Providers Found</h1>
          </div>
        </div>
      </>
    );
  }
  
  if (data) {
    return (
      <>
        <h1 className="text-center mt-5">{provider}</h1>
        <Filter />
        <div className="container">
          <div className="row mt-5">
            {data.map((provider) => {
              return (
                <ProviderCard
                  key={provider._id}
                  fname={provider.firstName}
                  lname={provider.lastName}
                  title={provider.title}
                  image={provider.profileImg}
                  experties={provider.experties}
                  hourlyRate={provider.hourlyRate}
                  rating={provider.rating}
                  id={provider._id}
                />
              );
            })}
          </div>
        </div>
      </>
    );
  }
};

export default Provider;

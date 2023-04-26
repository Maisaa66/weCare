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

  // state for checking
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  let providerType = useSelector((state) => state.provider.type);
  // console.log("providerType ", providerType);

  useEffect(() => {
    dispatch(setProviderType(provider));
    if (providerType) {
      axios.get("http://localhost:7000/api/v1/providers/").then((res) => {
        console.log("res.data ", res.data.data.providers);
        dispatch(setProviderData(res.data.data.providers));
        setLoading(false);
      });
    }
  }, []);

  // if provider data is not loaded yet, show a spinner
  if (loading)
    return (
      <div class="spinner-grow text-success mt-5" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    );

  return (
    <>
      <h1 className="text-center mt-5">{providerType}</h1>
      <Filter />
      <div className="container">
        <ProviderCard />
      </div>
    </>
  );
};

export default Provider;

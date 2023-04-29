import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const RequestCard = ({ request }) => {
  // get provider name
  // const [providerName, setProviderName] = useState(null);
  const [userName, setUserName] = useState(null);
  // here we get the type of the user from the redux store, to know which profile we are going to fetch
  const userType = useSelector((state) => state.user.userType);
  // here we set the url type to know which profile we are going to fetch
  // if the user is a service provider, we will fetch the user profile
  let urlType = userType === "serviceProvider" ? "users" : "providers";

  const getUserById = async (id) => {
    const response = await axios.get(
      `http://localhost:7000/api/v1/${urlType}/profile/${id}`,
      {
        withCredentials: true,
        headers: {
          "Access-Control-Allow-Origin": "http://localhost:3000",
          "Content-Type": "application/json",
        },
      }
    );
    // console.log(info);
    setUserName(response.data.data);
  };

  useEffect(() => {
    userType === "serviceProvider"
      ? getUserById(request.customerId)
      : getUserById(request.providerId);

      console.log(request);
  }, []);

  return (
    <div className="card mb-2">
      <div className="card-body d-flex justify-content-between">
        <div className="fs-5">
          <h5 className="card-title">Request Title</h5>
          <p className="card-text" style={{ fontSize: "0.8rem" }}>
            Request Status:{" "}
            <span
              className={
                request.reqStatus === "rejected"
                  ? "badge bg-danger  card-text"
                  : request.reqStatus === "pending"
                  ? "badge bg-warning text-dark card-text"
                  : "badge bg-success  card-text"
              }
            >
              {request.reqStatus}
            </span>
          </p>

          {userName && (
            <p className="card-text text-muted" style={{ fontSize: "0.8rem" }}>
              {" "}
             {userType === "serviceProvider" ? "Customer Name:": "Provider Name:"} {userName.firstName + " " + userName.lastName}
            </p>
          )}
        </div>
        <div className="d-flex ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            style={{ width: "1.8rem", fill: "#cc0000", cursor: "pointer" }}
            className="mx-3"
          >
            <path d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            style={{
              width: "1.8rem",
              fill: "var(--mainColor)",
              cursor: "pointer",
            }}
          >
            <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default RequestCard;

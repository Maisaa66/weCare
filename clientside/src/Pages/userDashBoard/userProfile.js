import React, { useEffect, useState } from "react";
import classes from "./userDashBoard.module.css";
import NavBar from "../../components/Layout/NavBar/NavBar";
import ReviewCard from "../../components/UI/reviewCard/ReviewCard";
import { useSelector } from "react-redux";
import axios from "axios";

const UserProfile = () => {
  const state = useSelector((state) => state.user.profileID);
  const [user, setUserDetails] = useState(null);

  const getUserById = async (id) => {
    const response = await axios.get(
      `http://localhost:7000/api/v1/users/profile/${id}`,
      {
        withCredentials: true,
        headers: {
          "Access-Control-Allow-Origin": "http://localhost:3000",
          "Content-Type": "application/json",
        },
      }
    );
    // console.log(info);
    setUserDetails(response.data.data);
  };

  useEffect(() => {
    getUserById(state);
  }, []);

  return (
    <>
      {user && (
        <div className={`d-flex flex-column w-100  ${classes.mainBox}`}>
          <div className="shadow">
            <NavBar />
          </div>
          <div className="card my-3" style={{ width: "70%", margin: "auto" }}>
            <div className="card-body">
              <div className="d-flex align-items-center pb-4 border-bottom">
                <div className="position-relative">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    className="rounded-circle"
                    style={{ width: "100px" }}
                    alt="Avatar"
                  />
                </div>

                <div className="d-flex justify-content-between align-items-center w-100">
                  <div className="ms-3">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="fs-3">
                        {user.firstName} {user.lastName}
                      </div>
                      <div
                        className="d-flex ms-3 rounded-pill px-2"
                        style={{
                          border: "1px solid #e8e6e6",
                          backgroundColor: "#e8e6e6",
                        }}
                      >
                        <div style={{ fontSize: "1rem" }}>{user.ratings}</div>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          style={{ width: "20px", fill: "#ffdf00" }}
                          className="ms-1"
                        >
                          <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                        </svg>
                      </div>
                    </div>
                    <div className="d-flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        style={{ width: "15px" }}
                      >
                        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                      </svg>
                      <div className="ms-2">
                        {user.address.governate}, {user.address.country}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-lg-row flex-sm-column justify-content-evenly"></div>
              {/* testimonels */}
              <section class="gradient-custom">
                <div class="container mx-4 p-4">
                  <div class="row d-flex justify-content-center">
                    <div class="col-md-12">
                      <div class="text-start">
                        <div className="fw-bold fs-5">Reviews: </div>
                        <i class="fas fa-quote-left fa-3x text-white"></i>
                      </div>

                      <div class="card">
                        <div class="card-body">
                          <div
                            id="carouselDarkVariant"
                            class="carousel slide carousel-dark"
                            data-mdb-ride="carousel"
                          >
                            <div class="carousel-indicators mb-0">
                              <button
                                data-mdb-target="#carouselDarkVariant"
                                data-mdb-slide-to="0"
                                class="active"
                                aria-current="true"
                                aria-label="Slide 1"
                              ></button>
                              <button
                                data-mdb-target="#carouselDarkVariant"
                                data-mdb-slide-to="1"
                                aria-label="Slide 1"
                              ></button>
                              <button
                                data-mdb-target="#carouselDarkVariant"
                                data-mdb-slide-to="2"
                                aria-label="Slide 1"
                              ></button>
                            </div>

                            <div class="carousel-inner pb-5">
                              <div class="carousel-item active">
                                <ReviewCard></ReviewCard>
                              </div>

                              <div class="carousel-item">
                                <ReviewCard></ReviewCard>
                              </div>

                              <div class="carousel-item">
                                <ReviewCard></ReviewCard>
                              </div>
                            </div>

                            <button
                              class="carousel-control-prev"
                              type="button"
                              data-mdb-target="#carouselDarkVariant"
                              data-mdb-slide="prev"
                            >
                              <span
                                class="carousel-control-prev-icon"
                                aria-hidden="true"
                              ></span>
                              <span class="visually-hidden">Previous</span>
                            </button>
                            <button
                              class="carousel-control-next"
                              type="button"
                              data-mdb-target="#carouselDarkVariant"
                              data-mdb-slide="next"
                            >
                              <span
                                class="carousel-control-next-icon"
                                aria-hidden="true"
                              ></span>
                              <span class="visually-hidden">Next</span>
                            </button>
                          </div>
                        </div>
                      </div>

                      <div class="text-center mt-4 pt-2">
                        <i class="fas fa-quote-right fa-3x text-white"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserProfile;

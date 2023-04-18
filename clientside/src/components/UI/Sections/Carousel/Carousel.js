import React from "react";

import classes from "./Carousel.module.css";

const Carousel = () => {
  return (
    <div className="conatiner">
      <div id="carouselExampleDark" class="carousel carousel-dark slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner text-center">
          <div class="carousel-item active" data-bs-interval="10000">
            <div className="carousel_conatiner">
              <div className="carousel_header">
                <div className="carousel_profile d-flex">
                  <div className="carousel_profile_img">
                    <div className={`${classes.profile_img}`}></div>
                  </div>
                  <div className="carousel_profile_name mx-3 mt-3">
                    <h3>John Doe</h3>
                    <p>CEO, ABC Company</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;

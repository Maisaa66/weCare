import React from "react";
import classes from "./ProviderCard.module.css";
import RequestForm from "../../../components/UI/RequestForm/RequestForm";

const ProviderCard = ({ fname, lname, title, image, experties, hourlyRate, rating, id }) => {
  return (
    <div className="col-lg-3 p-0 mt-2">
      <div className={`text-center ${classes.card_box}`}>
        <div className={`${classes.member_card} pt-2 pb-2`}>
          {/* <div className="d-flex justify-content-around align-items-center"> */}
          {/* <div className="d-flex flex-column"> */}
          <div className={`${classes.thumb_lg} mb-2 mx-auto`}>
            <img src={image} className="rounded-circle img-thumbnail" alt="profile-image" />
          </div>
          <div className="">
            <h4>{fname + " " + lname}</h4>
            <p className={classes.text_muted}>
              {title} <span>| </span>
              <span className={classes.text_pink}>{rating}</span>
            </p>
          </div>
          {/* </div> */}

          {/* <button
            type="button"
            className={`btn btn-rounded waves-effect w-md waves-light ${classes.button_color}`}
          >
            Order Now
          </button> */}
          <RequestForm
            providerId={id}
            hourlyRate= {hourlyRate}
          ></RequestForm>
          {/* </div> */}

          <hr className="mb-0" />

          <div className="mt-4">
            <h6>Experties: {experties}</h6>

            <div className="row justify-content-center">
              <div className="col-4">
                <div className="mt-3">
                  <h4>${hourlyRate}</h4>
                  <p className="mb-0 text-muted">Hourly Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderCard;

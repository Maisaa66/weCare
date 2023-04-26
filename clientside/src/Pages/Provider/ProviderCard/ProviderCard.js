import React from "react";
import classes from "./ProviderCard.module.css";

const ProviderCard = () => {
  return (
    <div className={`${classes.body}`}>
      <div className="row">
        <div className="col-lg-3 p-0">
          <div className={`text-center ${classes.card_box}`}>
            <div className={`${classes.member_card} pt-2 pb-2`}>
              <div className="d-flex justify-content-around align-items-center">
                <div className="d-flex flex-column ">
                  <div className={`${classes.thumb_lg} mb-2 mx-auto`}>
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar2.png"
                      className="rounded-circle img-thumbnail"
                      alt="profile-image"
                    />
                  </div>
                  <div className="">
                    <h4>Name</h4>
                    <p className={classes.text_muted}>
                      Title <span>| </span>
                      <span className={classes.text_pink}>Rate</span>
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className={`btn mt-3 btn-rounded waves-effect w-md waves-light ${classes.button_color}`}
                >
                  Message Now
                </button>
              </div>

              <hr className="mb-0" />

              <div className="mt-4">
                <h6>Experties:</h6>

                <div className="row justify-content-center">
                  <div className="col-4">
                    <div className="mt-3">
                      <h4>$45</h4>
                      <p className="mb-0 text-muted">Hourly Rate</p>
                    </div>
                  </div>
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

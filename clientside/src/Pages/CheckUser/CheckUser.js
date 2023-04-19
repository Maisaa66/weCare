import classes from "./CheckUser.module.css";
import { faHandHoldingHand } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export default function CheckUser() {
  const [userType, setUserType] = useState("");
  return (
    <div className={`${classes.box}`}>
      <div className={`${classes.container}`}>
        <h1>Join as a Care Beneficiary or Care Giver</h1>

        <div className="row">
          <div className="col-md-6 col-lg-6 col-sm-12">
            <label>
              <input
                type="radio"
                name="user"
                className={`${classes.cardInputElement}`}
                onClick={() => setUserType("as a Beneficiary")}
              />

              <div className={`${classes.cardInput}`}>
                <FontAwesomeIcon
                  icon={faHandHoldingHand}
                  style={{
                    color: "var(--mainColor)",
                    height: "30px",
                    margin: "10px",
                  }}
                />
                <div>Care Beneficiary</div>
                <div>I am a care beneficiary, </div>
              </div>
            </label>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12">
            <label>
              <input
                type="radio"
                name="user"
                className={`${classes.cardInputElement}`}
                onClick={() => setUserType("as a Giver")}
              />

              <div className={`${classes.cardInput}`}>
                <FontAwesomeIcon
                  icon={faHandHoldingHeart}
                  style={{
                    color: "var(--mainColor)",
                    height: "30px",
                    margin: "10px",
                  }}
                />
                <div>Care Giver</div>
                <div>I am a Care Giver, looking </div>
              </div>
            </label>
          </div>
        </div>
        <div>
          <a href="http://marcel-pirnay.be/" className={`${classes.btn}`}>
            <svg width="277" height="62">
              <defs>
                <linearGradient id="grad1">
                  <stop offset="0%" stopColor="#66b9a6" />
                  <stop offset="100%" stopColor="#5fe4c5" />
                </linearGradient>
              </defs>
              <rect
                x="5"
                y="5"
                rx="25"
                fill="none"
                stroke="url(#grad1)"
                width="266"
                height="50"
              ></rect>
            </svg>
            <span>SIGNUP {userType}</span>
          </a>
        </div>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h4" textAlign="center" fullWidth>
              <span style={{ fontSize: "0.9rem" }}>
                Already have an account?
              </span>
              <Link
                href="#"
                variant="body2"
                style={{ color: "var(--mainColor)" }}
                sx={{ fontWeight: "bold" }}
              >
                {" Log In"}
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

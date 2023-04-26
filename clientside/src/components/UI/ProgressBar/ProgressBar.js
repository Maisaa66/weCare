import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useSelector } from "react-redux";

export default function ProgressBar(props) {
  const userType = useSelector((state) => state.userInfo.type);
  let steps;
  if (userType === "Care Beneficiary") {
    steps = [
      "Basic Information",
      "Personal Information",
      "Address",
      "Finished",
    ];
  } else if (userType === "Care giver") {
    steps = [
      "Basic Information",
      "Personal Information",
      "Address",
      "Work Experince",
      "Documents",
      "Finished",
    ];
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={props.stepNum} alternativeLabel>
        {steps.map((label) => (
          <Step
            key={label}
            sx={{
              "& .MuiStepLabel-root .Mui-completed": {
                color: "var(--mainColor)", // circle color (COMPLETED)
              },
              "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel":
                {
                  color: "grey.500", // Just text label (COMPLETED)
                },
              "& .MuiStepLabel-root .Mui-active": {
                color: "var(--secondaryColor)", // circle color (ACTIVE)
              },
              "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel":
                {
                  color: "common.black", // Just text label (ACTIVE)
                },
              "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                fill: "black", // circle's number (ACTIVE)
              },
            }}
          >
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

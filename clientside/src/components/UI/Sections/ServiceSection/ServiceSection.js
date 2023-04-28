import React from "react";

import Service from "../Service/Service";
import classes from "./ServiceSection.module.css";

const ServiceSection = () => {
  return (
    <div className="container">
      <h1 className={`${classes.head_width}`}>
        Everything Is <span className={classes.colorized}>Do Driven</span> By Services
      </h1>
      <div
        className={`d-flex flex-column flex-md-row align-items-center justify-content-md-around mt-5`}
      >
        <div className={`row justify-content-center`}>
          <Service
            ico="fa-solid fa-user-nurse"
            provider="Nurses"
            sDesc="Our team of qualified nurses offers compassionate care, medical advice, and support to."
          />
          <Service
            ico="fa-solid fa-user-nurse"
            provider="Companionship"
            sDesc="We believe in the power of human connection. Explore our Companionship section for tips."
          />
          <Service
            ico="fa-solid fa-user-doctor"
            provider="Physiotherapy"
            sDesc="Hands-on treatment approach that helps people recover from injuries, manage chronic pain."
          />
          <Service
            ico="fa-solid fa-user-nurse"
            provider="Nannys"
            sDesc="Personalized childcare services, creating a safe and nurturing environment for children."
          />
          <Service
            ico="fa-solid fa-shield-virus"
            provider="Autism"
            sDesc="Autism is a neurodevelopmental disorder that affects social communication, behavior."
          />
          <Service
            ico="fa-solid fa-shield-virus"
            provider="Alzheimer's and Dementia"
            sDesc="Alzheimer's and Dementia are neurodegenerative diseases that cause progressive decline."
          />
          <Service
            ico="fa-solid fa-shield-virus"
            provider="ADHD"
            sDesc="ADHD is a common neurodevelopmental disorder that affects attention, impulsivity."
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;

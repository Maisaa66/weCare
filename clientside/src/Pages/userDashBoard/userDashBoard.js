import React from "react";
import classes from "./userDashBoard.module.css";
import FormDialog from "../../components/UI/FormDialog/FormDialog";
import NavBar from "../../components/Layout/NavBar/NavBar";

const userDashBoard = () => {
  return (
    <div className={`d-flex flex-column w-100  ${classes.mainBox}`}>
      <div className="shadow">
        <NavBar />
      </div>

      <div className="card my-3" style={{ width: "70%", margin: "auto" }}>
        <div className="card-body">
          <div className="d-flex align-items-center pb-4 border-bottom">
            <div className="position-relative">
              <div
                className="position-absolute top-100 start-100 translate-middle
"
              >
                <FormDialog
                  data={{
                    label: "Image url",
                    name: "profileImg",
                    value: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
                  }}
                />
              </div>

              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                className="rounded-circle"
                style={{ width: "100px" }}
                alt="Avatar"
              />
            </div>

            <div className="d-flex justify-content-between align-items-center w-100">
              <div className="ms-3">
                <div className="fs-3">User Name</div>
                <div className="d-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    style={{ width: "15px" }}
                  >
                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                  </svg>
                  <div className="ms-2">Location</div>
                </div>
              </div>
              <div className={`h-50 p-2 rounded-pill ${classes.button}`}>
                See Public View
              </div>
            </div>
          </div>
          <div className="p-4 text-start">
            <div className="contact m-4">
              <div className="fw-bold fs-5">Contact Details: </div>
              <div
                className="d-flex justify-content-between align-items-center"
                style={{ width: "40%" }}
              >
                <div>Phone Number: </div>
                <div className="d-flex align-items-center">
                  <div>+5555555555</div>
                  <FormDialog
                    data={{
                      label: "Phone Number",
                      name: "phoneNum",
                      value: "+5555555555",
                    }}
                  />
                </div>
              </div>
              <div
                className="d-flex justify-content-between align-items-center"
                style={{ width: "40%" }}
              >
                <div>Email: </div>
                <div className="d-flex align-items-center">
                  <div>example@email.com</div>
                  <FormDialog
                    data={{
                      label: "Email",
                      name: "email",
                      value: "example@email.com",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="address m-4">
              <div className="fw-bold fs-5">Address Details: </div>
              <div
                className="d-flex justify-content-between align-items-center"
                style={{ width: "40%" }}
              >
                <div>Country: </div>
                <div className="d-flex align-items-center">
                  <div>Egypt</div>
                  <FormDialog
                    data={{
                      label: "Country",
                      name: "country",
                      value: "Egypt",
                    }}
                  />
                </div>
              </div>
              <div
                className="d-flex justify-content-between align-items-center"
                style={{ width: "40%" }}
              >
                <div>Governate: </div>
                <div className="d-flex align-items-center">
                  <div>Cairo</div>
                  <FormDialog
                    data={{
                      label: "Governate",
                      name: "governate",
                      value: "Cairo",
                    }}
                  />
                </div>
              </div>
              <div
                className="d-flex justify-content-between align-items-center"
                style={{ width: "40%" }}
              >
                <div>Area: </div>
                <div className="d-flex align-items-center">
                  <div>Helioplis</div>
                  <FormDialog
                    data={{
                      label: "Area",
                      name: "area",
                      value: "Helioplis",
                    }}
                  />
                </div>
              </div>
              <div
                className="d-flex justify-content-between align-items-center"
                style={{ width: "40%" }}
              >
                <div>Street: </div>
                <div className="d-flex align-items-center">
                  <div>Abo Bakr Elsedik</div>
                  <FormDialog
                    data={{
                      label: "Street",
                      name: "street",
                      value: "Abo Bakr Elsedik",
                    }}
                  />
                </div>
              </div>
              <div
                className="d-flex justify-content-between align-items-center"
                style={{ width: "40%" }}
              >
                <div>Building Number: </div>
                <div className="d-flex align-items-center">
                  <div>10</div>
                  <FormDialog
                    data={{
                      label: "Building Number",
                      name: "buildingNum",
                      value: "10",
                    }}
                  />
                </div>
              </div>
              <div
                className="d-flex justify-content-between align-items-center"
                style={{ width: "40%" }}
              >
                <div>Apartment Number: </div>
                <div className="d-flex align-items-center">
                  <div>2</div>
                  <FormDialog
                    data={{
                      label: "Apartment Number",
                      name: "apartmentNum",
                      value: "2",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default userDashBoard;

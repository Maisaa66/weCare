import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
export default function Nav() {
  const { pathname } = useLocation();
  const urlType = pathname.split("/")[2];

  return (
    <nav className="navbar  navbar-expand-lg bg-light rounded-5">
      <div className="container-fluid">
        <div>
          <Link to="/" className="navbar-brand d-lg-block d-none m-0">
            <img className="w-100" src="./Images/logo.png" alt="Logo" />
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="charts" className="nav-link active" aria-current="page">
                Charts
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="requests"
                className="nav-link active"
                aria-current="page"
              >
                All Requests <span className="badge ms-2 rounded-pill">14</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="users">
                All Users
                <span className="badge ms-2 rounded-pill">14</span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="providers">
                All Service providers
                <span className="badge ms-2 rounded-pill">14</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

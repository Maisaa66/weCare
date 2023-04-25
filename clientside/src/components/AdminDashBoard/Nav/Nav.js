import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav class="navbar  navbar-expand-lg bg-light rounded-5">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="allreq" class="nav-link active" aria-current="page">
                All Requests <span class="badge ms-2 rounded-pill">14</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="allusers">
                All Users
                <span class="badge ms-2 rounded-pill">14</span>
              </Link>
            </li>
            <li class="nav-item dropdown">
            <Link class="nav-link" to="allsp">
                All Service providers
                <span class="badge ms-2 rounded-pill">14</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

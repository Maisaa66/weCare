import { List } from "react-bootstrap-icons";
import classes from "./NavBar.module.css";
import { Link, Outlet } from "react-router-dom";
import { Search } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar() {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false);
  const userInfo = useSelector((state) => state.user.info);
  const isAdmin = useSelector((state) => state.user.isAdmin);
  const userType = useSelector((state) => state.user.userType);

  useEffect(() => {
    if (document.cookie.includes("jwt")) {
      setIsLogged(true);
    }
  }, []);
  // Delete Cookie
  const deleteCookie = () => {
    document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setIsLogged(false);
  };
  return (
    <>
      {" "}
      <nav className="navbar navbar-expand-lg shadow-none py-1">
        <div className="container justify-content-between">
          <Link to="/" className="navbar-brand d-lg-block d-none m-0">
            Navbar
          </Link>
          <button
            className={`navbar-toggler m-lg-auto me-sm-auto   ${classes.toggler}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <List></List>
          </button>
          <div
            className={`collapse justify-content-end navbar-collapse ${classes.collapsed}`}
            id="navbarSupportedContent"
          >
            <ul
              className={`navbar-nav m-lg-auto me-sm-auto ${classes.navList}`}
            >
              <li className="nav-item">
                <Link
                  className={`nav-link ${classes.navLink}`}
                  aria-current="page"
                  to="/provider?provider=Nurse"
                >
                  Nurses
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${classes.navLink}`}
                  aria-current="page"
                  to="/provider?provider=Companion"
                >
                  Companionship
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${classes.navLink}`}
                  aria-current="page"
                  to="/provider?provider=Physiotherapist"
                >
                  Physiotherapy
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${classes.navLink}`}
                  aria-current="page"
                  to="/provider?provider=Nanny"
                >
                  Nannys
                </Link>
              </li>
              <li className="nav-item dropdown ">
                <a
                  className={`nav-link dropdown-toggle ${classes.navLink}`}
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Special Care
                </a>
                <ul
                  className={`dropdown-menu ${classes.dropdownMenu}`}
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <Link
                      className={`dropdown-item ${classes.dropDown}`}
                      to="/provider?provider=Special-Care:Autism"
                    >
                      Autism
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`dropdown-item ${classes.dropDown}`}
                      to="/provider?provider=Special-Care:Alzheimer's and Dementia"
                    >
                      Alzheimer's and Dementia
                    </Link>
                  </li>
                  <li></li>
                  <li>
                    <Link
                      className={`dropdown-item ${classes.dropDown}`}
                      to="/provider?provider=Special-Care:ADHD"
                    >
                      ADHD
                    </Link>
                  </li>
                </ul>
              </li>
              {/* <li className="nav-item">
    <>
      <nav className="navbar navbar-expand-lg shadow-none py-3">
        <div className="container justify-content-between">
          <Link to="/" className="navbar-brand m-0" href="#">
            Navbar
          </Link>
          <button
            className={`navbar-toggler ms-auto ${classes.toggler}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <List></List>
          </button>
          <div
            className={`collapse justify-content-end navbar-collapse ${classes.collapsed}`}
            id="navbarSupportedContent"
          >
            <ul className={`navbar-nav mb-2 mb-lg-0 ${classes.navList}`}>
              {/* <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                About
              </a>
            </li> */}
            </ul>
          </div>
          {/* <a href="#login" className="mybtn mybtnLightSolid">
          Login/Register
        </a> */}
          <form className="flex-grow-1 d-flex py-3 me-0 justify-content-center">
            <input
              className={classes.search}
              // class="form-control me-2 search shadow-none"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button className={classes.searchBtn} type="submit">
              <Search></Search>
            </button>
          </form>
          {isLogged ? (
            <div className="dropdown me-5">
              <button
                className="btn btn-none border-0 shadow-0 d-flex flex-md-row flex-sm-column-reverse align-items-center justify-content-center"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="me-md-2">
                  {userInfo && userInfo.firstName + " " + userInfo.lastName}
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  style={{
                    width: "2.5rem",
                    fill: `${
                      window.location.pathname === "/"
                        ? "#000"
                        : "var(--mainColor)"
                    }`,
                  }}
                >
                  <path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" />
                </svg>
              </button>
              <ul className="dropdown-menu">
                {isAdmin ? (
                  <li>
                    <Link to="/admin" className="mybtn mybtnLightSolid m-auto">
                      Dashboard
                    </Link>
                  </li>
                ) : (
                  <li>
                    <Link
                      to={
                        userType === "user"
                          ? "/userDashBoard"
                          : "/providerDashBoard"
                      }
                      className="mybtn mybtnLightSolid m-auto"
                    >
                      Profile
                    </Link>
                  </li>
                )}
                <li>
                  <Link
                    to="/"
                    className="mybtn mybtnLightSolid m-auto"
                    onClick={deleteCookie}
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login" className="mybtn mybtnLightSolid m-auto">
              Login
            </Link>
          )}
        </div>
      </nav>
      {/* <Link to="/" className="navbar-brand d-lg-none d-block m-auto m-0">
        Navbar
      </Link> */}
    </>
  );
}
export default NavBar;

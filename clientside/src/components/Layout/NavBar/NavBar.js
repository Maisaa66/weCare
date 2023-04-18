import { List } from "react-bootstrap-icons";
import classes from "./NavBar.module.css";
function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg shadow-none py-3">
      <div className="container justify-content-between">
        <a className="navbar-brand m-0" href="#">
          Navbar
        </a>
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
            <li className="nav-item">
              <a
                className={`nav-link ${classes.navLink}`}
                aria-current="page"
                href="#"
              >
                Nurses
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${classes.navLink}`}
                aria-current="page"
                href="#"
              >
                Companionship
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${classes.navLink}`}
                aria-current="page"
                href="#"
              >
                Physiotherapy
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${classes.navLink}`}
                aria-current="page"
                href="#"
              >
                Nannys
              </a>
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
                  <a className={`dropdown-item ${classes.dropDown}`} href="#">
                    Autism
                  </a>
                </li>
                <li>
                  <a className={`dropdown-item ${classes.dropDown}`} href="#">
                    Alzheimer's and Dementia
                  </a>
                </li>
                <li></li>
                <li>
                  <a className={`dropdown-item ${classes.dropDown}`} href="#">
                    ADHD
                  </a>
                </li>
              </ul>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Contact
              </a>
            </li> */}
          </ul>
        </div>
        {/* <a href="#login" className="mybtn mybtnLightSolid">
          Login/Register
        </a> */}
      </div>
    </nav>
  );
}
export default NavBar;

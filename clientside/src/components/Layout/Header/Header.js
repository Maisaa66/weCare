import NavBar from "../NavBar/NavBar";
import SearchBar from "../Search/SearchBar";
import classes from "./Header.module.css";
// import Hero from "../../../assets/images/hero.png";
function Header() {
  return (
    <div className={`${classes.header} `}>
      <div className="d-sm-none d-lg-block">
        <svg
          viewBox="0 0 190 100"
          className={`position-absolute ${classes.zBefore} ${classes.bgDiv}`}
        >
          <path
            d="M 0 70 C 200 150 300 0 500 100 L 500 0 L 0 0"
            fill="#0E7452"
            opacity="0.2"
          ></path>
        </svg>
      </div>
      <SearchBar></SearchBar>
      <NavBar></NavBar>
      <div className="container mt-3">
        <div className="row text-start align-items-center">
          <div className="col-sm-12 col-lg-6">
            <h1 className="h1 my-2">
              <span className={classes.span}>WeCare</span> is there to help you
              at your home!
            </h1>
            <p className="lead my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <button className="mybtn mybtnLightSolid my-2">Explore More</button>
          </div>
          <div className="col-sm-12 px-5 col-lg-6 text-lg-end text-sm-center">
            <div className={`${classes.bigger} d-sm-none d-lg-block ms-auto`}>
              <div
                className={`${classes.customeImg}  ${classes.headerImg} ms-auto`}
              ></div>
            </div>
            {/* <img width="400px" src={Hero} alt="hero image" /> */}
          </div>
        </div>
        <div
          class={`${classes.bigger} d-sm-none d-md-block ${classes.smallBorder} ms-auto ${classes.zBefore} position-absolute`}
        >
          <div class={`${classes.customeImg} ${classes.shape} ms-auto`}></div>
        </div>
      </div>
    </div>
  );
}
export default Header;

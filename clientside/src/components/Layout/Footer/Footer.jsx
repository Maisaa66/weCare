import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={`text-center text-lg-start ${classes.footer}`}>
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span className="text-dark">
              Get connected with us on social networks:
            </span>
          </div>
          <div>
            <a href="" className="me-4 link-light">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="me-4 link-secondary">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="me-4 link-secondary">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="me-4 link-secondary">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="me-4 link-secondary">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="me-4 link-secondary">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-4 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem text-dark"></i>WeCare
                </h6>
                <p className="text-dark">
                  We provide excellent services to ensure your well being, we
                  strive for the best.
                </p>
              </div>

              <div className="col-md-4 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className=" link-dark">
                    About
                  </a>
                </p>
                <p>
                  <a href="#!" className=" link-dark">
                    Contact
                  </a>
                </p>
                <p>
                  <a href="#!" className=" link-dark">
                    Terms & Condition
                  </a>
                </p>
                <p>
                  <a href="#!" className="link-dark">
                    Privacy Policy
                  </a>
                </p>
              </div>

              <div className="col-md-4 mx-auto mb-md-0 mb-4 text-dark">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3 link-light"></i> 6th October,
                  Giza, Egypt
                </p>
                <p>
                  <i className="fas fa-envelope me-3 link-light"></i>
                  info@example.com
                </p>
                <p>
                  <i className="fas fa-phone me-3 link-light"></i> + 01 234 567
                  88
                </p>
                <p>
                  <i className="fas fa-print me-3 link-light"></i> + 01 234 567
                  89
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className={`text-center p-4 ${classes.copyRight}`}>
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </footer>
    </>
  );
};
export default Footer;

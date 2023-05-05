import classes from "./Footer.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <footer className={`text-center text-lg-start ${classes.footer}`}>
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span className="text-dark">
              {t("footerConnect")}
            </span>
          </div >
          <div className={`${classes.connected}`}>
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
                  <i className="fas fa-gem text-dark"></i>{t("slogan")}
                </h6>
                <p className="text-dark">
                  {t("footerSlogan")}
                </p>
              </div>

              <div className="offset-md-1 col-md-3  mx-auto mb-4">
                <h6 className="text-uppercase fw-bold ">{t("footerUsefulLinks")}</h6>
                <p>
                  <Link to="/about" className=" link-dark">
                    {t("about")}
                  </Link>
                </p>
                <p>
                  <a href="#!" className=" link-dark">
                  {t("contact")}
                  </a>
                </p>
                <p>
                  <a href="#!" className=" link-dark">
                  {t("terms")}
                  </a>
                </p>
                <p>
                  <a href="#!" className="link-dark">
                  {t("policy")}
                  </a>
                </p>
              </div>

              <div className="offset-md-1 col-md-3 mx-auto mb-md-0 mb-4 text-dark">
                <h6 className="text-uppercase fw-bold mb-4">{t("contactInfo")}</h6>
                <p>
                  <i className="fas fa-home  link-light pe-1"></i>{t("contactAddress")}
                </p>
                <p>
                  <i className="fas fa-envelope  link-light pe-2"></i>
                  {t("contactEmail")}
                </p>
                <p>
                  <i className="fas fa-phone  link-light pe-1"></i>{t("phone")}
                </p>
                <p>
                  <i className="fas fa-print  link-light pe-1"></i>{t("fax")}
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className={`text-center p-4 ${classes.copyRight}`}>
          © 2021 {t("copyright")}
          <a className="text-reset fw-bold" href="/">
            {t("slogan")}
          </a>
        </div>
      </footer>
    </>
  );
};
export default Footer;

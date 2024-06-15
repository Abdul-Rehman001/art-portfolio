import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h2 className="footer__title">Abdul Rehman</h2>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/abdul.rehman_____/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-instagram"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/abdul-rehman-tahir-11298a217/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-linkedin-alt"></i>
          </a>

          <a
            href="https://github.com/Abdul-Rehman001"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-github-alt"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; Abdul Rehman. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;

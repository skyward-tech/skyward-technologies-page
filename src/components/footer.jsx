import React from "react";

export const Footer = (props) => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="nav__brand-mark">S</span>
            <div>
              <strong>Skyward Technologies</strong>
              <p>Ascend to smarter solutions.</p>
            </div>
          </div>

          <nav className="footer-links">
            <ul>
              <li>
                <a href="#features" className="page-scroll">
                  Features
                </a>
              </li>
              <li>
                <a href="#about" className="page-scroll">
                  About
                </a>
              </li>
              <li>
                <a href="#team" className="page-scroll">
                  Team
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="footer-social">
            <a
              target="_blank"
              href={props.data ? props.data.facebook : "/"}
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 - SKYWARD TECHNOLOGIES LTDA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

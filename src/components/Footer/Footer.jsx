import React from "react";
import { Link } from "react-router-dom";

import InstagramIcon from "@mui/icons-material/Instagram"; // інстаграм
import FacebookIcon from "@mui/icons-material/Facebook"; // фейсбук
import MailOutlineIcon from "@mui/icons-material/MailOutline"; // емейл

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__row">
          <div className="footer__col footer__logo">
            <Link to="/">Logo</Link>
          </div>
          <div className="footer__col">
            <h2 className="footer__title">Магазин</h2>
            <div className="footer__nav">
              <ul>
                <li>
                  <Link to="/about">Про магазин</Link>
                </li>
                <li>
                  <Link to="/products">Товари</Link>
                </li>
                <li>
                  <Link to="/equipment">Спорядження</Link>
                </li>
                <li>
                  <Link to="/more">Більше</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__col">
            <h2 className="footer__title">Зв'язок з нами</h2>
            <ul className="icons">
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a href="mailto:example@example.com">
                  <MailOutlineIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          © 2024 Avalanche. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

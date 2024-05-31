import React from "react";
import { Link } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search"; // Search icon
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined"; // User icon
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"; // Heart icon
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"; // Cart icon
import HomeIcon from "@mui/icons-material/Home";
import AcUnitIcon from "@mui/icons-material/AcUnit"; // для спорядження
import ContactMailIcon from "@mui/icons-material/ContactMail";
import Info from "@mui/icons-material/Info";

import vid from "../../assets/vid.mp4";
import logo from "../../assets/img/avalanche-logo.png";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <video className="header__video" autoPlay loop muted>
        <source src={vid} type="video/mp4" />
      </video>
      <div className="navbar">
        <div className="wrapper">
          <div className="left">
            <Link to="/">
              <img src={logo} alt="Logo" />
              Avalanche
            </Link>
          </div>
          <div className="right">
            <ul>
              <li>
                <Link to="/">
                  <HomeIcon />
                  До дому
                </Link>
              </li>
              <li>
                <Link to="/equipment">
                  {" "}
                  <AcUnitIcon />
                  Спорядження
                </Link>
              </li>
              <li>
                <Link to="/about">
                  {" "}
                  <Info />
                  Про сайт
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  {" "}
                  <ContactMailIcon />
                  Контакти
                </Link>
              </li>
            </ul>
            <div className="icons">
              <SearchIcon />
              <PersonOutlineOutlinedIcon />
              <FavoriteBorderOutlinedIcon />
              <div className="cartIcon">
                <ShoppingCartOutlinedIcon />
                <span>0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner__content">
        <h1>Welcome to Avalanche</h1>
        <Link to="/shop" className="banner__button">
          Перейти до розділу
        </Link>
      </div>
    </header>
  );
};

export default Header;

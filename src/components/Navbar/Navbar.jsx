import React from "react";

import SearchIcon from '@mui/icons-material/Search'; // іконка пошуку
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'; // іконка юзера
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'; // іконка серця
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'; //іконка корзини
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
    return (
        <div className="wrapper_nav">
            <div className="navbar">
                <div className="wrapper">

                    <div className="left" >
                        <Link to="/">Avalanche</Link>
                    </div>
                    <div className="right">
                        <ul>
                            <li>До дому</li>
                            <li>Спорядження</li>
                            <li>Про сайт</li>
                            <li>Контакти</li>
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
        </div>
    )
}

export default Navbar
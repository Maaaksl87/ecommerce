import React from "react";
import { Link } from "react-router-dom";

import InstagramIcon from '@mui/icons-material/Instagram'; // інстаграм
import FacebookIcon from '@mui/icons-material/Facebook'; // фейсбук
import MailOutlineIcon from '@mui/icons-material/MailOutline'; // емейл

import "./Footer.scss"
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__row">
                    <div className="footer__col footer__logo">
                        <Link to="/">Logo</Link>
                    </div>
                    <div className="footer__col">
                        <h2 className="footer__title"></h2>
                        <div className="footer__nav"></div>
                    </div>
                    <div className="footer__col">
                        <h2 className="footer__title"></h2>
                        <div className="footer__nav"></div>
                    </div>
                    <div className="footer__col">
                        <h2 className="footer__subscribe"></h2>
                        <div className="footer__title"></div>
                    </div>
                    <ul className="icons">
                        <InstagramIcon />
                        <FacebookIcon />
                        <MailOutlineIcon />
                    </ul>
                </div>

                <div className="footer__bottom"></div>
            </div>
        </footer>
    )
}

export default Footer
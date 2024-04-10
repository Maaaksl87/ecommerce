import React from "react";
import { Link } from "react-router-dom";

import InstagramIcon from '@mui/icons-material/Instagram'; // інстаграм
import FacebookIcon from '@mui/icons-material/Facebook'; // фейсбук
import MailOutlineIcon from '@mui/icons-material/MailOutline'; // емейл

import "./Footer.scss"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__row">
                    <div className="footer__col footer__logo">
                        <Link to="/">Logo</Link>
                    </div>
                    <div className="footer__col">
                        <h2 className="footer__title">Магазин</h2>
                        <div className="footer__nav">
                            <ul>
                                <li><a href="/">Про магазин</a></li>
                                <li><a href="/">Товари</a></li>
                                <li><a href="/">Спорядження</a></li>
                                <li><a href="/">Більше</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__col">
                        <h2 className="footer__title">Зв'язок з нами</h2>
                        <ul className="icons">
                            <InstagramIcon />
                            <FacebookIcon />
                            <MailOutlineIcon />
                        </ul>
                    </div>
                </div>

                <div className="footer__bottom">Copyright</div>
            </div>
        </footer>
    )
}

export default Footer
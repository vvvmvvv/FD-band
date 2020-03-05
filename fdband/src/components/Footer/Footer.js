import React from 'react';
import './Footer.scss';
import {Link, withRouter} from 'react-router-dom';

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="block footer">
                <div className="block__wrapper">
                    <div className="footer__rights">&copy; 2020 FB band, Inc.
                All Rights Reserved.</div>

                    <nav className="footer__nav nav">
                        <ul className="nav__list">
                            <li className="nav__item"><Link to="#" className="nav__link">Investors</Link></li>
                            <li className="nav__item"><Link to="#" className="nav__link">Newsroom</Link></li>
                            <li className="nav__item"><Link to="#" className="nav__link">contact</Link></li>
                        </ul>
                    </nav>

                    <div className="footer__misc misc">
                        <div className="footer__icon icon icon-twitter"></div>
                        <div className="footer__icon icon icon-facebook"></div>
                        <div className="footer__icon icon icon-linkedin"></div>
                        <div className="footer__icon icon icon-google"></div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
}

export default withRouter(Footer);
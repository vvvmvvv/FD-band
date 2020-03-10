import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="block footer">
                <div className="block__wrapper">
                    <div className="footer__rights">&copy; 2020 FB band, Inc.
                All Rights Reserved.</div>

                    <div className="footer__misc misc">
                        <a href="https://github.com/vvvmvvv/FD-band/">
                            <div className="footer__icon icon"></div>
                        </a>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
}

export default Footer;
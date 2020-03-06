import React from 'react';
import './Nav.scss';
import { Link, withRouter } from 'react-router-dom';
import logo from '../../assets/images/logo.png'

const Nav = () => {
    return (
        <React.Fragment>
            <header className="header block">
                <div className="block__wrapper">
                    <div className="header__logo logo">
                        <img className="logo__image" src={logo} alt="" />
                    </div>

                    <nav className="header__nav nav">
                        <ul className="nav__list">
                            <li className="nav__item"><Link to="/" className="nav__link">Home</Link></li>
                            <li className="nav__item"><Link to="/calendar" className="nav__link">Calendar</Link></li>
                            <li className="nav__item"><Link to="/aboutUs" className="nav__link">About us</Link></li>
                            <li className="nav__item"><Link to="/contacts" className="nav__link">Contacts</Link></li>
                        </ul>
                    </nav>

                    <div className="header__misc misc">
                        <div className="header__icon icon icon-search"></div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    );
}

export default withRouter(Nav);
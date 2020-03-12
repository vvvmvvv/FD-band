import React from 'react';
import './Contacts.scss';


const Contacts = () => {
    return (
        <React.Fragment>
            <div className="contacts  block">
                <figure className="absolute-bg"></figure>
                <div className="fog__container">
                    <div className="fog__img fog__img--first"></div>
                    <div className="fog__img fog__img--second"></div>
                </div>
                <div className="block__wrapper">

                    {/* <h1 className="contacts__title">CONTACTS PAGE !!!!!!!</h1> */}

                    <div className="contacts__cards cards ">
                        <div className="cards__card menu--top">

                            {/* <Link to="/aboutUs/vladimir" className="cards__button">show more</Link>  */}

                            <ul className="menu " >
                                <a className="menu__button" href="#menu">
                                    <div className="menu__image menu__image--Vova"></div>
                                </a>
                                <li className="menu__item">
                                    <a href="#menu">
                                        <span className="icon-media-play"></span>
                                    </a>
                                </li>
                                <li className="menu__item">
                                    <a href="#menu">
                                        <span className="fa fa-linkedin"></span>
                                    </a>
                                </li>
                                <li className="menu__item">
                                    <a href="#menu">
                                        <span className="fa fa-instagram"></span>
                                    </a>
                                </li>
                            </ul>
                            {/* <div className="cards__title">Volodymyr Mikulin</div> 
                            <Link to="/aboutUs/vladimir" className="cards__button">show more</Link> */}
                        </div>
                        <div className="cards__card menu--bottom">
                            {/* <div className="cards__title">Taras Moskalenko</div>
                            <Link to="/aboutUs/taras" className="cards__button">show more</Link> */}
                            <ul className="menu" >
                                <a className="menu__button" href="#menu">
                                    <div className="menu__image menu__image--Ann"></div>
                                </a>
                                <li className="menu__item">
                                    <a href="#menu">
                                        <span className="icon-media-play"></span>
                                    </a>
                                </li>
                                <li className="menu__item">
                                    <a href="#menu">
                                        <span className="fa fa-linkedin"></span>
                                    </a>
                                </li>
                                <li className="menu__item">
                                    <a href="#menu">
                                        <span className="fa fa-instagram"></span>
                                    </a>
                                </li>
                            </ul>

                        </div>
                        <div className="cards__card">
                            {/* <div className="cards__title">Alexander Lesiuk</div>
                            <Link to="/aboutUs/aleksandr" className="cards__button">show more</Link> */}
                            <ul className="menu" >
                                <a className="menu__button" href="#menu">
                                    <div className="menu__image menu__image--Taras"></div>
                                </a>
                                <li className="menu__item">
                                    <a href="#menu">
                                        <span className="icon-media-play"></span>
                                    </a>
                                </li>
                                <li className="menu__item">
                                    <a href="#menu">
                                        <span className="fa fa-linkedin"></span>
                                    </a>
                                </li>
                                <li className="menu__item">
                                    <a href="#menu">
                                        <span className="fa fa-instagram"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="cards__card menu--bottom">
                            {/* <div className="cards__title">Ann Androsiuk</div>
                            <Link to="/aboutUs/anna" className="cards__button">show more</Link> */}
                            <ul className="menu" >
                                <a className="menu__button" href="#menu">
                                    <div className="menu__image menu__image--Lena"></div>
                                </a>
                                <li className="menu__item">
                                    <a href="#menu">
                                        <span className="icon-media-play"></span>
                                    </a>
                                </li>
                                <li className="menu__item">
                                    <a href="#menu">
                                        <span className="fa fa-linkedin"></span>
                                    </a>
                                </li>
                                <li className="menu__item">
                                    <a href="#menu">
                                        <span className="fa fa-instagram"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="cards__card">
                            {/* <div className="cards__title">Lena Vu</div>
                            <Link to="/aboutUs/lena" className="cards__button">show more</Link> */}
                            <ul className="menu" >
                                <a className="menu__button" href="#menu">
                                    <div className="menu__image menu__image--Taras"></div>
                                </a>
                                <li className="menu__item">
                                    <a href="#menu">
                                        <span className="icon-media-play"></span>
                                    </a>
                                </li>
                                <li className="menu__item">
                                    <a href="#menu">
                                        <span className="fa fa-linkedin"></span>
                                    </a>
                                </li>
                                <li className="menu__item">
                                    <a href="#menu">
                                        <span className="fa fa-instagram"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="contacts__description">Please, hover</div>
                </div>
            </div>


        </React.Fragment>
    );
}

export default Contacts;
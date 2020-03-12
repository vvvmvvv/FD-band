import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Lena.scss';
import '../TeamCss/aboutme.css';
import '../TeamCss/animations.css';
import '../TeamCss/social.css';
import '../TeamCss/style.css';
import '../TeamCss/backToTeam.css';
import lenaPng from './imgLena/lena.png'

import imgGit from "../../../../assets/images/iconsLena/git.png"
import imgLinkedin from "../../../../assets/images/iconsLena/linkedin.png";
import about2 from '../../../../assets/images/about2.JPG'
import aboutme_photo1 from '../../../../assets/images/aboutme_photo1.JPG'
import door from '../../../../assets/images/door.JPG'

// import annA from './imgLena/annA.jpg'
// import bannerph from './imgLena/banner-ph.JPG'
// import fd_boys from './imgLena/fd_boys.JPG'
// import fd_guys from './imgLena/fd_guys.JPG'
// import fdband from './imgLena/fdband.JPEG'
// import fdband_member from './imgLena/fdband_member.JPG'
// import lena from './imgLena/lena.JPG'




const Lena = () => {
    return (
        <React.Fragment>
            <div className="team-inner">
            <div className="team_header">
            <Link  to="/aboutUs#ourBand"><div class="backToTeam"><p align="right">Back to team</p></div></Link>
            
                <div className="team_header__bg">
                
                {/* <h2>Page by Lena</h2> */}
                    <ul className="team_header-nav">
                        <li className="team_header-nav__item"><a href="#about-me">About me</a></li>
                        {/* <li className="team_header-nav__item"><a href="#gallery">Our team</a></li> */}
                        <li className="team_header-nav__item"><a href="#social">Contact me</a></li>
                    </ul>
                </div>

                <div className="team_wrapper">
                    <div className="team_header__container team_container">
                        <img className="team_header-banner__photo" src={lenaPng} alt="banner" />

                        <div className="team_header__text text">
                            <h1 className="team_header-text__title title">Lena Vu</h1>
                            <p className="team_header-text__description description">Welcome to my page! Get to know me a bit better!</p>
                            <p className="team_header-text__description description">My life has changed overnigth since I joined the band!</p>
                            <p className="team_header-text__description description"> So Happy to be a part of this team!</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-me" id="about-me">
                <div className="team_wrapper">
                    <div className="about-me__container1 team_container">
                        <div className="about-me__text text">
                            <h1 className="about-me-text__title title">About me</h1>
                            <p className="about-me-text__description description">I am from Vietnam. Apart from music I am also keen on art and taking beautiful photos</p>
                        </div>
                        <img className="about-me__photo aboutme_lena_photo" src={aboutme_photo1} />
                    </div>
                    <div className="about-me__container2 team_container">
                        <img className="about-me__photo photo" src={about2} />
                        <div className="about-me__text text">
                            <h1 className="about-me-text__title title">My role </h1>
                            <p className="about-me-text__description description">I play the guitar and sing</p>
                        </div>
                        <img className="about-me__photo3 photo" src={door} />

                    </div>

                </div>
            </div>


            {/* <div className="gallery" id="gallery">

                <div className="team_wrapper">

                    <div className="h1__wrapper">
                        <h1 className="gallery__title title">Our team</h1>
                    </div>


                    <div className="gallery__container">
                        <div className="gallery__item">
                            <div className="front">
                                <img src={fd_guys} alt="" />
                            </div>
                            <div className="back"></div>
                        </div>
                        <div className="gallery__item">
                            <div className="front">
                                <img src={annA} alt="" />
                            </div>
                            <div className="back"></div>
                        </div>
                        <div className="gallery__item">
                            <div className="front">
                                <img src={lena} alt="" />
                            </div>
                            <div className="back"></div>
                        </div>
                        <div className="gallery__item">
                            <div className="front">
                                <img src={fdband_member} alt=""/>
                            </div>
                            <div className="back"></div>
                        </div>
                        <div className="gallery__item">
                            <div className="front">
                                <img src={fd_boys} alt="" />
                            </div>
                            <div className="back"></div>
                        </div>
                        <div className="gallery__item">
                            <div className="front">
                                <img src={fdband} alt="" />
                            </div>
                            <div className="back"></div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="social" id="social">
                <div className="team_wrapper">
                    <div className="h1__wrapper">
                        <h1 className="title">Contact Me</h1>
                    </div>
                    <ul className="social-media__list social-transition">
                        <li className="social-media__item git"><a href='https://github.com/haodangthi' target="_blank"><img src={imgGit} alt="git" /></a></li>
                        <li className="social-media__item linkedin"><a href="https://www.linkedin.com/in/helen-vu-7094b218b/" target="_blank"><img src={imgLinkedin} alt="linkedin" /></a></li>
                    </ul>
                </div>
            </div>






</div>
        </React.Fragment>
    );
}

export default withRouter(Lena);
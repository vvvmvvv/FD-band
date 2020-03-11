import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Lena.scss';
import './aboutme.css';
import './animations.css';
import './social.css';
import './style.css';
import './backToTeam.css';

import imgGit from './imgLena/iconsLena/git.png'
import imgLinkedin from './imgLena/iconsLena/linkedin.png'
import about2 from './imgLena/about2.JPG'
import aboutme_photo1 from './imgLena/aboutme_photo1.JPG'
import annA from './imgLena/annA.jpg'
import bannerph from './imgLena/banner-ph.JPG'
import fd_boys from './imgLena/fd_boys.JPG'
import fd_guys from './imgLena/fd_guys.JPG'
import fdband from './imgLena/fdband.JPEG'
import fdband_member from './imgLena/fdband_member.JPG'
import lena from './imgLena/lena.JPG'

import door from './imgLena/door.JPG'


const Lena = () => {
    return (
        <React.Fragment>
            
            <div className="lena_header">
                <div className="lena_header__bg">
                <Link  to="/aboutUs#ourBand"><div class="backToTeam"><p align="right">Back to team</p></div></Link>
                <h2>Page by Lena</h2>
                    <ul className="lena_header-nav">
                        <li className="lena_header-nav__item"><a href="#about-me">About me</a></li>
                        <li className="lena_header-nav__item"><a href="#gallery">Our team</a></li>
                        <li className="lena_header-nav__item"><a href="#social">Contact me</a></li>
                    </ul>
                </div>

                <div className="lena_wrapper">
                
                    <div className="lena_header__container lena_container">


                        <img className="lena_header-banner__photo photo" src={bannerph} alt="banner" />

                        <div className="lena_header__text text">
                            <h1 className="lena_header-text__title title">Lena Vu</h1>
                            <p className="lena_header-text__description description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. At eveniet commodi, quam ea itaque ipsum neque similique eaque dolorum natus.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-me" id="about-me">
            
                <div className="lena_wrapper">
                    <div className="about-me__container1 lena_container">
                        <div className="about-me__text text">
                            <h1 className="about-me-text__title title">Lena Vu</h1>
                            <p className="about-me-text__description description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae id doloremque reiciendis repellendus quo eius ducimus impedit suscipit. Placeat eum saepe porro vitae dicta earum molestiae quasi distinctio! Corrupti, laudantium!</p>
                        </div>
                        <img className="about-me__photo photo " src={aboutme_photo1} />
                    </div>

                    <div className="about-me__container2 lena_container">
                        <img className="about-me__photo photo" src={about2} />
                        <div className="about-me__text text">
                            <h1 className="about-me-text__title title">Lena Vu</h1>
                            <p className="about-me-text__description description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus ad a repudiandae soluta distinctio, nostrum laboriosam veniam corporis harum natus, totam nam aut sequi atque accusantium nisi fugiat cupiditate autem.</p>
                        </div>
                        <img className="about-me__photo3 photo" src={door} />

                    </div>

                </div>
            </div>


            <div className="gallery" id="gallery">

                <div className="lena_wrapper">

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
            </div>

            <div className="social" id="social">
                <div className="lena_wrapper">
                    <div className="h1__wrapper">
                        <h1 className="title">Contact Me</h1>
                    </div>
                    <ul className="social-media__list social-transition">


                        <li className="social-media__item git"><a href='https://github.com/haodangthi' target="_blank"><img src={imgGit} alt="git" /></a></li>
                        <li className="social-media__item linkedin"><a href="https://www.linkedin.com/in/helen-vu-7094b218b/" target="_blank"><img src={imgLinkedin} alt="linkedin" /></a></li>
                    </ul>
                </div>
            </div>







        </React.Fragment>
    );
}

export default withRouter(Lena);
import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './Vladimir.scss';
import '../TeamCss/aboutme.css';
import '../TeamCss/animations.css';
import '../TeamCss/social.css';
import '../TeamCss/style.css';
import '../TeamCss/backToTeam.css';

import vovaPng from './imgVova/vova.png'
import vova2 from './imgVova/vovan.jpg'
import imgGit from "../../../../assets/images/iconsLena/git.png"
import imgLinkedin from "../../../../assets/images/iconsLena/linkedin.png";


const Vladimir = () => {
    return (
        <React.Fragment>
            <div className="team-inner">
             <div className="team_header">
            <Link  to="/aboutUs#ourBand"><div className="backToTeam"><p align="right">Back to team</p></div></Link>
            
                <div className="team_header__bg">
                    <ul className="team_header-nav">
                        <li className="team_header-nav__item"><a href="#about-me">About me</a></li>
                        <li className="team_header-nav__item"><a href="#social">Contact me</a></li>
                    </ul>
                </div>

                <div className="team_wrapper">
                    <div className="team_header__container team_container">
                        <img className="vova_header-banner__photo" src={vovaPng} alt="banner" />

                        <div className="team_header__text text">
                            <h1 className="team_header-text__title title">Volodymyr Mikulin</h1>
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
                            <p className="about-me-text__description description">
                                I am from second capital of Ukraine. Apart from music I am also do sport and win a lot of competitions</p>
                        </div>
                    </div>
                    <div className="about-me__container2 team_container">
                        <div className="about-me__text text">
                            <h1 className="about-me-text__title title">My role </h1>
                            <p className="about-me-text__description description">I play on the drums and percussion</p>
                        </div>
                        <img className="about-me__photo3 photo" src={vova2} alt="vovaPhoto" />

                    </div>

                </div>
            </div>

            <div className="social" id="social">
                <div className="team_wrapper">
                    <div className="h1__wrapper">
                        <h1 className="title">Contact Me</h1>
                    </div>
                    <ul className="social-media__list social-transition">
                        <li className="social-media__item git"><a href='https://github.com/vvvmvvv' target="_blank"><img src={imgGit} alt="git" /></a></li>
                        <li className="social-media__item linkedin"><a href="https://www.linkedin.com/in/vladimir-mikulin-54a670188/" target="_blank"><img src={imgLinkedin} alt="linkedin" /></a></li>
                    </ul>
                </div>
            </div>
</div>
        </React.Fragment>
    );
}

export default withRouter(Vladimir);
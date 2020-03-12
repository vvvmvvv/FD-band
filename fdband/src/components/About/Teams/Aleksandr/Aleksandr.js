import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './Aleksandr.scss';
import '../TeamCss/aboutme.css';
import '../TeamCss/animations.css';
import '../TeamCss/social.css';
import '../TeamCss/style.css';
import '../TeamCss/backToTeam.css';

import sashaPng from './imgSasha/sasha.png'
import sashaJpg from './imgSasha/sasha2.jpg'
import imgGit from "../../../../assets/images/iconsLena/git.png"
import imgLinkedin from "../../../../assets/images/iconsLena/linkedin.png";

const Aleksandr = () => {
    return (
        <React.Fragment>
            <div className="team-inner">
             <div className="team_header">
            <Link  to="/aboutUs#ourBand"><div class="backToTeam"><p align="right">Back to team</p></div></Link>
                <div className="team_header__bg">
                    <ul className="team_header-nav">
                        <li className="team_header-nav__item"><a href="#about-me">About me</a></li>
                        <li className="team_header-nav__item"><a href="#social">Contact me</a></li>
                    </ul>
                </div>
                <div className="team_wrapper">
                    <div className="team_header__container team_container">
                        <img className="sasha_header-banner__photo" src={sashaPng} alt="banner" />
                        <div className="team_header__text text">
                            <h1 className="team_header-text__title title">Alexander Lesiuk</h1>
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
                            <p className="about-me-text__description description">I am from Ivano Frankivsk. Apart from music I am also keen on physics and done many experiments with nature</p>
                        </div>
                    </div>
                    <div className="about-me__container2 team_container">
                        <div className="about-me__text text">
                            <h1 className="about-me-text__title title">My role </h1>
                            <p className="about-me-text__description description">Backing vocals and also I play the guitar</p>
                        </div>
                        <img className="about-me__photo3 photo" src={sashaJpg} alt="sashaGuitars" />
                    </div>
                </div>
            </div>
            <div className="social" id="social">
                <div className="team_wrapper">
                    <div className="h1__wrapper">
                        <h1 className="title">Contact Me</h1>
                    </div>
                    <ul className="social-media__list social-transition">
                        <li className="social-media__item git"><a href='https://github.com/LesiukO' target="_blank"><img src={imgGit} alt="git" /></a></li>
                        <li className="social-media__item linkedin"><a href="https://www.linkedin.com/in/lesiuko/" target="_blank"><img src={imgLinkedin} alt="linkedin" /></a></li>
                    </ul>
                </div>
            </div>
            </div>
        </React.Fragment>
    );
}

export default withRouter(Aleksandr);

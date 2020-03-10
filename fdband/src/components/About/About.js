import React, { useRef } from 'react';

import { Link, withRouter } from 'react-router-dom';
import './About.scss';
import Gallery from '../Gallery/Gallery'

const About = () => {      
    const exploration = useRef();
    const about = useRef();
    const action = () => {
        console.log(exploration)
        console.log(about)
    }
    const changeSection = (e) => {
        const content = exploration.current.querySelector('.content')
    }

    return (
        <React.Fragment>
            <section className="exploration" ref={exploration}>
                <div className="content captionText">
                    <h2 className="content__title">Exploration Content</h2>
                    <div id="about" ref={about} className="info info--active ">
                        <h3 className="info__title">About</h3>
                        <p className="info__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, cum! Impedit quia facilis quam deleniti ab non sunt nemo, ipsa voluptatibus? Ad sequi fuga libero corporis nostrum officiis perspiciatis eaque!</p>
                    </div>
                    <div id="tourDates" className="info">
                        <h3 className="info__title">Tour dates</h3>
                        <p className="info__description">Ipsum adipisicing elit. Accusamus, cum! Impedit quia facilis quam deleniti ab non sunt nemo, ipsa voluptatibus? Ad sequi fuga libero corporis nostrum officiis perspiciatis eaque!</p>
                    </div>
                    <div id="history" className="info">
                        <h3 className="info__title">History</h3>
                        <p className="info__description">Accusamus, cum! Impedit quia facilis quam deleniti ab non sunt nemo, ipsa voluptatibus? Ad sequi fuga libero corporis nostrum officiis perspiciatis eaque!</p>
                    </div>
                    <div id="news" className="info">
                        <h3 className="info__title">Latest news</h3>
                        <p className="info__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit quia facilis quam deleniti ab non sunt nemo, ipsa voluptatibus? Ad sequi fuga libero corporis nostrum officiis perspiciatis eaque!</p>
                    </div>
                </div>
                <div className="menu">
                    <ul className="menu__list">
                        <li className="menu__item">
                            <Link 
                                onClick={changeSection} 
                                // ref={}
                                className="menu__link active" 
                                to="#about"
                            >about</Link>
                        </li>
                        <li className="menu__item"><Link onClick={changeSection} className="menu__link" to="#tourDates">tour dates</Link></li>
                        <li className="menu__item"><Link onClick={changeSection} className="menu__link" to="#history">history</Link></li>
                        <li className="menu__item"><Link onClick={changeSection} className="menu__link" to="#news">latest news</Link></li>
                    </ul>
                </div>
                <aside className="glide">
                    <div className="glide__rectangle slide-bottom">
                        <span className="glide__title">BAND</span>
                    </div>
                    <div className="glide__description">
                        <p>Lorem ipsum dolor sit amet consectetur</p>
                        <p>Lorem, ipsum dolor sit amet</p>
                    </div>
                </aside>
            </section>
            <Gallery/>
        </React.Fragment>
    );
}

export default withRouter(About);
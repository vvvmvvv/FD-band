import React, { useRef } from 'react';
// import ReactDOM from 'react-dom'
import './About.scss';
import { Link, withRouter } from 'react-router-dom';

const About = () => {
    console.log('works');
    const exploration = useRef();

    const about = useRef();
    const aboutLink = useRef();
    const tourDates = useRef();
    const tourDatesLink = useRef();
    const history = useRef();
    const historyLink = useRef();
    const news = useRef();
    const newsLink = useRef();

    const contentRef = useRef();
    const glideRef = useRef();

    const blocks = [
        about,
        tourDates,
        history,
        news
    ]

    const links = [
        aboutLink,
        tourDatesLink,
        historyLink,
        newsLink
    ]


    const discardClasses = () => {
        blocks.forEach(ref => ref.current.classList.remove('info--active'));
        links.forEach(ref => ref.current.classList.remove('active'))
    }



    const changeSection = (e, val) => {
        discardClasses();
        console.log(val)
        e.target.classList.add('active')
        switch (val) {
            case 'about':
                console.log('about')
                blocks[0].current.classList.add('info--active')
                break;
            case 'tourDates':
                console.log('dates')
                blocks[1].current.classList.add('info--active')
                break;
            case 'history':
                console.log('history')
                blocks[2].current.classList.add('info--active')
                break;
            case 'news':
                console.log('news')
                blocks[3].current.classList.add('info--active')
                break;
        }
    }

    return (
        <React.Fragment>
            <section className="exploration" ref={exploration}>
                <div className="content captionText" ref={contentRef}>
                    <h2 className="content__title">Exploration Content</h2>
                    <div className="wrapper">
                        <div id="about" ref={about} className="info info--active ">
                            <h3 className="info__title">About</h3>
                            <p className="info__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, cum! Impedit quia facilis quam deleniti ab non sunt nemo, ipsa voluptatibus? Ad sequi fuga libero corporis nostrum officiis perspiciatis eaque!</p>
                        </div>
                        <div id="tourDates" ref={tourDates} className="info">
                            <h3 className="info__title">Tour dates</h3>
                            <p className="info__description">Ipsum adipisicing elit. Accusamus, cum! Impedit quia facilis quam deleniti ab non sunt nemo, ipsa voluptatibus? Ad sequi fuga libero corporis nostrum officiis perspiciatis eaque!</p>
                        </div>
                        <div id="history" ref={history} className="info">
                            <h3 className="info__title">History</h3>
                            <p className="info__description">Accusamus, cum! Impedit quia facilis quam deleniti ab non sunt nemo, ipsa voluptatibus? Ad sequi fuga libero corporis nostrum officiis perspiciatis eaque!</p>
                        </div>
                        <div id="news" ref={news} className="info">
                            <h3 className="info__title">Latest news</h3>
                            <p className="info__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit quia facilis quam deleniti ab non sunt nemo, ipsa voluptatibus? Ad sequi fuga libero corporis nostrum officiis perspiciatis eaque!</p>
                        </div>
                    </div>

                </div>
                <div className="menu">
                    <ul className="menu__list">
                        <li className="menu__item">
                            <Link
                                onClick={(e) => changeSection(e, 'about')}
                                ref={aboutLink}
                                className="menu__link active"
                                to="#about"
                            >about</Link>
                        </li>
                        <li className="menu__item">
                            <Link
                                onClick={(e) => changeSection(e, 'tourDates')}
                                ref={tourDatesLink}
                                className="menu__link"
                                to="#tourDates"
                            >tour dates</Link>
                        </li>
                        <li className="menu__item">
                            <Link
                                onClick={(e) => changeSection(e, 'history')}
                                ref={historyLink}
                                className="menu__link"
                                to="#history"
                            >history</Link>
                        </li>
                        <li className="menu__item">
                            <Link
                                onClick={(e) => changeSection(e, 'news')}
                                ref={newsLink}
                                className="menu__link"
                                to="#news"
                            >latest news</Link>
                        </li>
                    </ul>
                </div>
                <aside className="glide">
                    <div className="glide__rectangle slide-bottom" ref={glideRef}>
                        <span className="glide__title">BAND</span>
                    </div>
                    <div className="glide__description">
                        <p>Lorem ipsum dolor sit amet consectetur</p>
                        <p>Lorem, ipsum dolor sit amet</p>
                    </div>
                </aside>
            </section>
        </React.Fragment>
    );
}

export default withRouter(About);
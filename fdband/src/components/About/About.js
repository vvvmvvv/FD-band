import React, { useRef } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './About.scss';
import Gallery from '../Gallery/Gallery'

const About = () => {
    const exploration = useRef();
    const about = useRef();
    const aboutLink = useRef();
    const tourDates = useRef();
    const tourDatesLink = useRef();
    const ourBand = useRef();
    const ourBandLink = useRef();

    const contentRef = useRef();
    const glideRef = useRef();

    const blocks = [
        about,
        tourDates,
        ourBand
    ]

    const links = [
        aboutLink,
        tourDatesLink,
        ourBandLink
    ]


    const discardClasses = () => {
        blocks.forEach(ref => ref.current.classList.remove('info--active'));
        links.forEach(ref => ref.current.classList.remove('active'))
    }



    const changeSection = (e, val) => {
        discardClasses();
        e.target.classList.add('active')
        switch (val) {
            case 'about':
                blocks[0].current.classList.add('info--active')
                break;
            case 'tourDates':
                blocks[1].current.classList.add('info--active')
                break;
            case 'ourBand':
                console.log('ourBand')
                blocks[2].current.classList.add('info--active')
                break;
            default:
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
                            <p className="info__description">
                                FD band is an Ukrainian music band. The group was formed in 2020 in Kyiv by 5 member`s
                                - Volodymyr Mikulin, Taras Moskalenko, Alexander Lesiuk, Ann Androsiuk, Lena Vu. The band's fast tempos,
                                instrumentals and aggressive musicianship made them one of the founding "big five" bands of rock.
                                FD band earned a growing fan base in the underground music community and won critical acclaim with
                                its first five albums.The band's third album, Because I Burger (2020), was described as one of the
                                heaviest and most influential rock albums. Its eponymous fifth album, White Good(2020), the band's
                                first to root predominantly in indie rock, appealed to a more mainstream audience, achieving substantial
                                commercial success and selling over 16 million copies in the Ukraine  to date, making it the best-selling album -
                                Americano with milk. After experimenting with different genres and directions in subsequent releases,
                                the band returned to its indie rock roots with the release of its album, Violet Ultrafiolet (2020),
                                which drew similar praise to that of the band's earlier albums.
                            </p>
                        </div>
                        <div id="tourDates" ref={tourDates} className="info">
                            <h3 className="info__title">Tour dates</h3>
                            <p className="info__description">Ipsum adipisicing elit. Accusamus, cum! Impedit quia facilis quam deleniti ab non sunt nemo, ipsa voluptatibus? Ad sequi fuga libero corporis nostrum officiis perspiciatis eaque!</p>
                        </div>
                        <div id="ourBand" ref={ourBand} className="info">
                            <h3 className="info__title">Who we are</h3>
                            <div className="team-cards">
                                <div className="team-cards__card card">
                                    <div className="card__image-wrapper">
                                        <div className="card__image card__image--Vova"></div>
                                    </div>
                                    <div className="card__info">
                                        <div className="card__title">Volodymyr Mikulin</div>
                                        <div className="card__position">drums, percussion</div>
                                        <Link to="/aboutUs/vladimir" className="card__button">show more</Link>
                                    </div>
                                </div>
                                <div className="team-cards__card card">
                                    <div className="card__info">
                                        <div className="card__title">Taras Moskalenko</div>
                                        <div className="card__position">bass, acoustic guitar, backing vocals</div>
                                        <Link to="/aboutUs/taras" className="card__button">show more</Link>
                                    </div>
                                    <div className="card__image-wrapper">
                                        <div className="card__image card__image--Taras"></div>
                                    </div>
                                </div>
                                <div className="team-cards__card card">
                                    <div className="card__image-wrapper">
                                        <div className="card__image card__image--Alex"></div>
                                    </div>
                                    <div className="card__info">
                                        <div className="card__title">Alexander Lesiuk</div>
                                        <div className="card__position">guitars, backing vocals </div>
                                        <Link to="/aboutUs/aleksandr" className="card__button">show more</Link>
                                    </div>
                                </div>
                                <div className="team-cards__card card">

                                    <div className="card__info">
                                        <div className="card__title">Ann Androsiuk</div>
                                        <div className="card__position">lead vocals</div>
                                        <Link to="/aboutUs/anna" className="card__button">show more</Link>
                                    </div>
                                    <div className="card__image-wrapper">
                                        <div className="card__image card__image--Ann"></div>
                                    </div>
                                </div>
                                <div className="team-cards__card card">
                                    <div className="card__image-wrapper">
                                        <div className="card__image card__image--Lena"></div>
                                    </div>
                                    <div className="card__info">
                                        <div className="card__title">Lena Vu</div>
                                        <div className="card__position">guitars, backing vocals </div>
                                        <Link to="/aboutUs/lena" className="card__button">show more</Link>
                                    </div>
                                </div>
                            </div>
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
                                onClick={(e) => changeSection(e, 'ourBand')}
                                ref={ourBandLink}
                                className="menu__link"
                                to="#ourBand"
                            >our band</Link>
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
            <Gallery />
        </React.Fragment>
    );
}

export default withRouter(About);
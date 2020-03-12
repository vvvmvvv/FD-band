import React, { useRef } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './About.scss';
import Gallery from '../Gallery/Gallery';
import Cards from '../../components/About/Cards/Cards';

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
        ourBand,
        tourDates,
        about
    ]

    const links = [
        ourBandLink,
        tourDatesLink,
        aboutLink

    ]


    const discardClasses = () => {
        blocks.forEach(ref => ref.current.classList.remove('info--active'));
        links.forEach(ref => ref.current.classList.remove('active'))
    }



    const changeSection = (e, val) => {
        discardClasses();
        e.target.classList.add('active')
        switch (val) {
            case 'ourBand':
                blocks[0].current.classList.add('info--active')
                break;
            case 'tourDates':
                blocks[1].current.classList.add('info--active')
                break;
            case 'about':
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
                    <div id="ourBand" ref={ourBand} className="info info--active">
                            <h3 className="info__title">Who we are</h3>
                            <Cards />
                        </div>
                        <div id="tourDates" ref={tourDates} className="info">
                            <h3 className="info__title">Tour dates</h3>
                            <ul className="dates">
                                <li className="dates__item">
                                    <div className="dates__image-wrapper">
                                        <div className="dates__image dates__image--London"></div>
                                    </div>
                                    <div className="dates__description">
                                        <div className="dates__city">
                                            <div className="dates__location">London, UK</div>
                                            <div className="dates__info">20.05.2020</div>
                                        </div>
                                        <div className="dates__place">
                                            <div className="dates__location">Place:</div>
                                            <div className="dates__info">Arena stadium</div>
                                        </div>
                                    </div>

                                </li>
                                <li className="dates__item">
                                    <div className="dates__image-wrapper">
                                        <div className="dates__image dates__image--Brovary"></div>
                                    </div>
                                    <div className="dates__description">
                                        <div className="dates__city">
                                            <div className="dates__location">Brovary, Ukraine</div>
                                            <div className="dates__info">01.06.2020</div>
                                        </div>
                                        <div className="dates__place">
                                            <div className="dates__location">Place:</div>
                                            <div className="dates__info">Arena stadium</div>
                                        </div>
                                    </div>

                                </li>
                                <li className="dates__item">
                                    <div className="dates__image-wrapper">
                                        <div className="dates__image dates__image--Lisabon"></div>
                                    </div>
                                    <div className="dates__description">
                                        <div className="dates__city">
                                            <div className="dates__location">Lisabon, Portugal</div>
                                            <div className="dates__info">03.06.2020</div>
                                        </div>
                                        <div className="dates__place">
                                            <div className="dates__location">Place:</div>
                                            <div className="dates__info">Arena stadium</div>
                                        </div>
                                    </div>

                                </li>
                                <li className="dates__item">
                                    <div className="dates__image-wrapper">
                                        <div className="dates__image dates__image--Reykjavik"></div>
                                    </div>
                                    <div className="dates__description">
                                        <div className="dates__city">
                                            <div className="dates__location">Reykjavík, Islandia</div>
                                            <div className="dates__info">06.06.2020</div>
                                        </div>
                                        <div className="dates__place">
                                            <div className="dates__location">Place:</div>
                                            <div className="dates__info">Arena stadium</div>
                                        </div>
                                    </div>

                                </li>
                                <li className="dates__item">
                                    <div className="dates__image-wrapper">
                                        <div className="dates__image dates__image--Tallin"></div>
                                    </div>
                                    <div className="dates__description">
                                        <div className="dates__city">
                                            <div className="dates__location">Tallin, Estonia</div>
                                            <div className="dates__info">10.06.2020</div>
                                        </div>
                                        <div className="dates__place">
                                            <div className="dates__location">Place:</div>
                                            <div className="dates__info">Arena stadium</div>
                                        </div>
                                    </div>

                                </li>
                                <li className="dates__item">
                                    <div className="dates__image-wrapper">
                                        <div className="dates__image dates__image--Riga"></div>
                                    </div>
                                    <div className="dates__description">
                                        <div className="dates__city">
                                            <div className="dates__location">Riga, Latvia</div>
                                            <div className="dates__info">12.06.2020</div>
                                        </div>
                                        <div className="dates__place">
                                            <div className="dates__location">Place:</div>
                                            <div className="dates__info">Arena stadium</div>
                                        </div>
                                    </div>

                                </li>
                            </ul>
                        </div>
                        <div id="about" ref={about} className="info">
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
                    </div>

                </div>
                <div className="menu">
                    <ul className="menu__list">
                        <li className="menu__item">
                            <Link
                                onClick={(e) => changeSection(e, 'ourBand')}
                                ref={ourBandLink}
                                className="menu__link active"
                                to="#ourBand"
                            >our band</Link>
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
                                onClick={(e) => changeSection(e, 'about')}
                                ref={aboutLink}
                                className="menu__link"
                                to="#about"
                            >about</Link>
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
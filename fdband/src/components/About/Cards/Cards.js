import React from 'react';
import './Cards.scss';
import { Link, withRouter } from 'react-router-dom';

const Cards = () => {
    return (
        <React.Fragment>

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

        </React.Fragment>
    );
}

export default withRouter(Cards);
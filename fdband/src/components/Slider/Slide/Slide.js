import React from 'react';
import './Slide.scss';

const Song = (props) => <li className="songs__item">{props.name}</li>

const Slide = (props) => {
    return (
        <li className={`slide ${props.classCentered}`}>
            <div className="slide__front">
                <img className='slide__image' src={props.src} alt={props.alt} />
                <div className="slide__play-btn">
                    <span className="slide__play-btn--icon icon-media-pause"></span>
                </div>
                <div className="slide__date">{props.date}</div>
                <h2 className='slide__title'>{props.name}</h2>
                <div className="slide__show-songs">
                    <div className="slide__show-songs--title">Show more</div>
                </div>
            </div>
            <div className="slide__back">
                <ul className="slide__songs songs">
                    {props.songs.map(song => {
                        return (
                            <Song
                                key={song.id}
                                name={song.name}
                            />
                        )
                    })}
                </ul>
            </div>
        </li>
    )
}

export default Slide;
import React from 'react';
import './Slide.scss';

const Song = (props) => <li className="songs__item">{props.name}</li>

const Slide = (props) => {
    return (
        <li className={`slide ${props.classCentered}`}>
            <div className="slide__front">
                <img className='slide__image' src={props.src} alt={props.alt} />
                <h2 className='slide__title'>{props.name}</h2>
            </div>
            <div className="slide__back">
                <ul className="slide__songs songs">
                {props.songs.map(song => {
                        return(
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
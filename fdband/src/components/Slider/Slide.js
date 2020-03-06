import React from 'react';
import './Slider.scss';
// import album from '../../assets/data/albums.json'

const Slide = (props) => {
    return (
        <li className={`slide ${props.classCentered}`}>
            <div className="slide__front">
                <img className='slide__image' src={props.src} alt={props.alt} />
            </div>
            <div className="slide__back">
                <ul className="slide__details">
                    <li className="slide__detail">jsdlkfj</li>
                    <li className="slide__detail">jsdlkfj</li>
                    <li className="slide__detail">jsdlkfj</li>
                    <li className="slide__detail">jsdlkfj</li>
                </ul>
            </div>
        </li>
    )
}

export default Slide;
import React from 'react';
import './Slider.scss';

const Slide = (props) => {
    return (
        <li className={`slide ${props.classCentered ? props.classCentered : ''}`}>
            <img className='slide__image' src={props.src} alt={props.alt} />
        </li>
    )
}

export default Slide;
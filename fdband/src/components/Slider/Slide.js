import React from 'react';
import './Slider.scss';
// import album from '../../assets/data/albums.json'

const Slide = (props) => {
    return (
        <li className={`slide ${props.classCentered}`}>
            <img className='slide__image' src={props.src} alt={props.alt} />
        </li>
    )
}

export default Slide;
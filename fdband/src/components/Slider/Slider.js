import React from 'react';
import ReactDOM from 'react-dom';
import Slide from './Slide';
import './Slider.scss';
import albums from '../../assets/data/albums.json'

function delay(ms) {
    return new Promise((resolve, reject) => setTimeout(resolve, ms))
}

export default class Slider extends React.Component {

    btnSwitchState = () => {
        const buttons = ReactDOM.findDOMNode(this).getElementsByClassName('slider__button');
        [].forEach.call(buttons, (btn) => btn.disabled = !btn.disabled);
    }

    btnAction = async(direction) => {
        const isNext = direction === 'next' ? true : false;
        this.btnSwitchState();

        const slider = ReactDOM.findDOMNode(this).querySelector('.slider__body');
        const slides = slider.getElementsByClassName('slide');

        const slideCenterId = Math.floor(slides.length / 2);

        slides[slideCenterId].classList.remove('slide--centered');
        slides[isNext ? slideCenterId + 1 : slideCenterId - 1].classList.add('slide--centered');

        [].forEach.call(slides, (slide => 
                slide.classList.add(`slide${isNext ? '--move-left' : '--move-right'}`)
        ));
        
        await delay(1000);
        this.btnSwitchState();
        
        const slide = slider.removeChild(isNext ? slider.firstChild : slider.lastChild);
        isNext ? slider.appendChild(slide) : slider.insertBefore(slide, slider.firstChild);
        
        [].forEach.call(slides, (slide => 
            slide.classList.remove(`slide${isNext ? '--move-left' : '--move-right'}`)
        ));
    }

    btnNext = () => this.btnAction('next')

    btnPrev = () => this.btnAction('prev')

    render() {
        return <React.Fragment>
            <div className="slider ">
                <div className="slider__body">
                    {albums.map(album => {
                        return(
                            <Slide 
                                key={album.id}
                                src={require(`../../assets/images/${album.image}`)}
                            />
                        )
                    })}
                </div>
                <div className="slider__panel">
                    <button className="slider__button" onClick={this.btnPrev}>PREV</button>
                    <button className="slider__button" onClick={this.btnNext}>NEXT</button>
                </div>
            </div>
        </React.Fragment>
    }

}
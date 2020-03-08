import React from 'react';
import ReactDOM from 'react-dom';
import Slide from './Slide/Slide';
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

    btnAction = async (direction) => {
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
                <figure className="absolute-bg"></figure>
                <div className="fog__container">
                    <div className="fog__img fog__img--first"></div>
                    <div className="fog__img fog__img--second"></div>
                </div>
                <div className="slider__body">
                    {albums.map(album => {
                        return (
                            <Slide
                                key={album.id}
                                classCentered={
                                    Math.floor(albums.length / 2) === album.id ? 'slide--centered' : ''
                                }
                                src={require(`../../assets/images/${album.image}`)}
                                alt={`album ${album.name}`}
                                date={album.date}
                                name={album.name}
                                songs={album.songs}
                            />
                        )
                    })}
                </div>
                <div className="slider__panel">
                    <div className="slider__button" onClick={this.btnPrev}>
                        <i className="slider__button--icon icon-arrow_left_alt"></i>
                        <div className="slider__button--title">prev</div>
                    </div>
                    <div className="slider__button" onClick={this.btnNext}>
                        <div className="slider__button--title">next</div>
                        <i className="slider__button--icon icon-arrow_right_alt"></i>
                    </div>
                </div>
            </div>
        </React.Fragment>
    }

}
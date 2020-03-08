import React from 'react';
import ReactDOM from 'react-dom';
import Slide from './Slide/Slide';

import './Slider.scss';

import albums from '../../assets/data/albums.json'

function delay(ms) {
    return new Promise((resolve, reject) => setTimeout(resolve, ms))
}

export default class Slider extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            slides: [
                ...albums.map(() => {
                    return {ref: React.createRef()}
                })
            ]
        };
    }

    handleChangeSlideCenter (sl) {
        const slides = this.state.slides;
        const id = sl.id;
        const id2 = sl.isNext ? sl.id + 1 : sl.id - 1;
        
        slides[id].ref.current.changeCenteredStatus()
        slides[id2].ref.current.changeCenteredStatus()
    }

    handleMoveSlides (isNext = true) {
        this.state.slides.forEach(s => s.ref.current.handleMove(isNext));
    }

    handleLoopSlides (slider, isNext) {
        const slide = slider.removeChild(isNext ? slider.firstChild : slider.lastChild);
        isNext ? slider.appendChild(slide) : slider.insertBefore(slide, slider.firstChild);
        const slideRef = isNext ? this.state.slides.shift() : this.state.slides.pop();
        isNext ? this.state.slides.push(slideRef) : this.state.slides.unshift(slideRef);
    }

    handleBtnDisable () {
        const buttons = ReactDOM.findDOMNode(this).getElementsByClassName('slider__button');
        [].forEach.call(buttons, (btn) => btn.disabled = !btn.disabled);
    }

    btnNext = () => this.btnAction('next')

    btnPrev = () => this.btnAction('prev')

    btnAction = async(direction) => {
        const isNext = direction === 'next' ? true : false;
        this.handleBtnDisable();

        const slider = ReactDOM.findDOMNode(this).querySelector('.slider__body');

        const slides = slider.getElementsByClassName('slide');
        this.handleChangeSlideCenter({
            slides: slides,
            id: Math.floor(slides.length / 2), //central slide id
            isNext: isNext
        });

        this.handleMoveSlides(isNext);
        
        await delay(1000);

        this.handleBtnDisable();
        this.handleLoopSlides(slider, isNext);
        this.handleMoveSlides();
    }

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

                        const isCentered = Math.floor(albums.length / 2) === album.id ? true : false;

                        return(
                            <Slide 
                                key={album.id}
                                ref={this.state.slides[album.id].ref}
                                isCentered={isCentered}
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
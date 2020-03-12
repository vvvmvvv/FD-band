import React from 'react';
import ReactDOM from 'react-dom';

// import classnames from 'classnames';

import Slide from './Slide/Slide';
import AudioPlayer from '../AudioPlayer/AudioPlayer';

import './Slider.scss';

import albums from '../../assets/data/albums.json'

function delay(ms) {
    return new Promise((resolve, reject) => setTimeout(resolve, ms))
}

export default class Slider extends React.Component {
    constructor (props) {
        super(props)

        this.audioPlayerRef = React.createRef();

        this.state = {
            idCentered: Math.floor(albums.length / 2),
            slides: [
                ...albums.map((album, index) => {
                    return {
                        id: index,
                        ref: React.createRef(),
                        songsRefs :[
                            ...album.songs.map(() => {
                                return {
                                    ref: React.createRef()
                                }
                            })
                        ]
                    }
                })
            ]
        }
    }

    handleChangeAlbum = (id) => {
        this.setState({
            idCentered: id
        }, () => {
            this.audioPlayerRef.current.handleAlbumChange(id, this.state.slides[id].ref, this.state.slides[id].songsRefs)
        })
    }

    handleChangeCenteredSlide = (sl) => {
        const slides = this.state.slides;
        const id = this.state.idCentered;
        const idNext = sl.isNext ? 
            (id + 1 === slides.length ? 0 : id + 1) :
            (id - 1 < 0 ? slides.length - 1 : id - 1);
        
        slides[id].ref.current.changeCenteredStatus()
        slides[idNext].ref.current.changeCenteredStatus()

        this.handleChangeAlbum(idNext)
    }

    handleMoveSlides = (isNext = true) => {
        this.state.slides.forEach(s => s.ref.current.handleMove(isNext));
    }

    handleLoopSlides (slider, isNext) {
        const slide = slider.removeChild(isNext ? slider.firstChild : slider.lastChild);
        isNext ? slider.appendChild(slide) : slider.insertBefore(slide, slider.firstChild);
    }

    handleBtnDisable = (status) => {
        const header = document.querySelector('.nav__list');
        const buttons = document.querySelector('.slider__panel') ? document.querySelector('.slider__panel').getElementsByClassName('slider__button') : false;

        if (buttons) {
            [].forEach.call(buttons, (btn) => {
                status ? btn.classList.add('slider__button--disabled') : btn.classList.remove('slider__button--disabled')
            });
        }
        status ? header.classList.add('slider__button--disabled') : header.classList.remove('slider__button--disabled')
    }

    btnNext = () => this.btnAction('next')

    btnPrev = () => this.btnAction('prev')

    btnAction = async(direction) => {
        const isNext = direction === 'next' ? true : false;

        const slider = ReactDOM.findDOMNode(this).querySelector('.slider__body');

        this.handleMoveSlides(isNext);

        this.handleChangeCenteredSlide({
            isNext: isNext
        });
        
        const disable = true;
        this.handleBtnDisable(disable);

        await delay(900);
        
        this.handleBtnDisable(!disable);

        this.handleMoveSlides();

        this.handleLoopSlides(slider, isNext);
    }

    render() {
        return (
            <div className="slider">
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
                                songsRefs={this.state.slides[album.id].songsRefs}
                                slideRef={this.state.slides[album.id].ref}
                                audioPlayerRef={this.audioPlayerRef}
                            />
                        )
                    })}
                </div>
                <div className="slider__panel">
                    <div 
                        className='slider__button'
                        onClick={this.btnPrev}>
                        <i className="slider__button--icon icon-arrow_left_alt"></i>
                        <div className="slider__button--title">prev</div>
                    </div>

                    <AudioPlayer 
                        ref={this.audioPlayerRef}
                        albumId={this.state.idCentered}
                        slideRef={this.state.slides[this.state.idCentered].ref}
                        songsRefs={this.state.slides[this.state.idCentered].songsRefs}
                    />

                    <div
                        className='slider__button'
                        onClick={this.btnNext}>
                        <div className="slider__button--title">next</div>
                        <i className="slider__button--icon icon-arrow_right_alt"></i>
                    </div>
                </div>
            </div>
        )
    }

}
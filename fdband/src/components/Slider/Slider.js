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

        this.handleChangeAlbum = this.handleChangeAlbum.bind(this)  
    }

    handleChangeAlbum (id) {
        this.setState({
            idCentered: id
        }, () => {
            this.audioPlayerRef.current.handleAlbumChange(id, this.state.slides[id].songsRefs)
        })
    }

    handleChangeCenteredSlide (sl) {
        const slides = this.state.slides;
        const id = this.state.idCentered;
        const idNext = sl.isNext ? 
            (id + 1 === slides.length ? 0 : id + 1) :
            (id - 1 < 0 ? slides.length - 1 : id - 1);
        
        slides[id].ref.current.changeCenteredStatus()
        slides[idNext].ref.current.changeCenteredStatus()

        this.handleChangeAlbum(idNext)
    }

    handleMoveSlides (isNext = true) {
        this.state.slides.forEach(s => s.ref.current.handleMove(isNext));
    }

    handleLoopSlides (slider, isNext) {
        const slide = slider.removeChild(isNext ? slider.firstChild : slider.lastChild);
        isNext ? slider.appendChild(slide) : slider.insertBefore(slide, slider.firstChild);
    }

    handleBtnDisable (status) {
        const buttons = ReactDOM.findDOMNode(this).getElementsByClassName('slider__button');
        [].forEach.call(buttons, (btn) => {
            status ? btn.classList.add('slider__button--disabled') : btn.classList.remove('slider__button--disabled')
        });
    }

    btnNext = () => this.btnAction('next')

    btnPrev = () => this.btnAction('prev')

    btnAction = async(direction) => {
        const isNext = direction === 'next' ? true : false;

        const slider = ReactDOM.findDOMNode(this).querySelector('.slider__body');

        this.handleChangeCenteredSlide({
            isNext: isNext
        });

        this.handleMoveSlides(isNext);
        
        const disable = true;
        this.handleBtnDisable(disable);

        await delay(1000);
        
        this.handleBtnDisable(!disable);

        this.handleLoopSlides(slider, isNext);
        this.handleMoveSlides();
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
import React from 'react';
import ReactDOM from 'react-dom';

import './Slide.scss';

import Song from '../Song/Song'; 

export default class Slide extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            isCentered: this.props.isCentered,
            isMoving: false,
            isNext: true,
            isFlipped: false,
            songs: [
                ...props.songs.map(() => {
                    return {
                        ref: React.createRef()
                    }
                })
            ]
        }

        this.changeCenteredStatus = this.changeCenteredStatus.bind(this)
        this.handleMove = this.handleMove.bind(this)
        this.flipSlide = this.flipSlide.bind(this)
        this.changeSong = this.changeSong.bind(this)
    }

    changeCenteredStatus () {
        this.setState({
            isCentered: !this.state.isCentered
        })
    }

    handleMove (isNext) {
        this.setState({
            isMoving: !this.state.isMoving,
            isNext: isNext
        })
    }

    flipSlide () {
        this.setState({
            isFlipped: !this.state.isFlipped
        })
    }

    changeSong (e) {
        const id = e.target.id;
        console.log(id);
        this.state.songs.forEach(song => {
            song.ref.current.playSong(false)
        });
        this.state.songs[id].ref.current.playSong()
    }

    render () {
        const center = this.state.isCentered ? 'slide--centered' : '';
        const moving = this.state.isMoving ? `slide${(this.state.isNext ? '--move-left' : '--move-right')}` : '';
        const flipped = this.state.isFlipped ? 'flipped' : '';
        return (
            <li className={`slide ${center} ${moving} ${flipped}`}>
                <div className="slide__front">
                    <img className='slide__image' src={this.props.src} alt={this.props.alt} />
                    <div className="slide__play-btn">
                        <span className="slide__play-btn--icon icon-media-pause"></span>
                    </div>
                    <div className="slide__date">{this.props.date}</div>
                    <h2 className='slide__title'>{this.props.name}</h2>
                    <div className="slide__show-songs" onClick={this.flipSlide}>
                        <div className="slide__show-songs--title" >Show more</div>
                    </div>
                </div>
                <div className="slide__back">
                    <div className="slide__details">
                        <ul className="slide__songs">
                            {this.props.songs.map(song => {
                                return(
                                    <Song
                                        onClick={this.changeSong}
                                        ref={this.state.songs[song.id].ref}
                                        key={song.id}
                                        id={song.id}
                                        name={song.name}
                                    />
                                )
                            })}
                        </ul>
                    </div>
                    <div className="slide__show-songs slide__hide-btn" onClick={this.flipSlide}>
                        <div className="slide__show-songs--title">Hide</div>
                    </div>
                </div>
            </li>
        )
    }
}

import React from 'react';
import ReactDOM from 'react-dom';

import './Slide.scss';

import Song from '../Song/Song'; 

export default class Slide extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            isPlaying: false,
            isCentered: props.isCentered,
            isMoving: false,
            isNext: true,
            isFlipped: false,
            songsRefs: props.songsRefs
        }
    }

    changeCenteredStatus = () => {
        this.setState({
            isPlaying: false,
            isCentered: !this.state.isCentered
        }, () => {
            this.props.audioPlayerRef.current.setSongsRefs(this.state.songs)
        })
    }

    handleMove = (isNext) => {
        this.setState({
            isMoving: !this.state.isMoving,
            isNext: isNext,
            isFlipped: false
        })
    }

    flipSlide = () => {
        this.setState({
            isFlipped: !this.state.isFlipped
        })
    }

    changeSong = (e) => {
        const id = e.target.id;
        
        this.state.songsRefs.forEach(song => {
            song.ref.current.playSong(false)
        });
        this.state.songsRefs[id].ref.current.playSong()
        
        this.props.audioPlayerRef.current.chooseExactSong(id)
    }

    handlePlay = () => {
        this.setState({
            isPlaying: !this.state.isPlaying
        }, () => {
            this.props.audioPlayerRef.current.setPlayStatus(this.state.isPlaying)
        })
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
                        <span 
                            onClick={this.handlePlay}
                            className={`slide__play-btn--icon icon-media-${this.state.isPlaying ? 'pause' : 'play'}`}
                            >
                        </span>
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
                                        ref={this.state.songsRefs[song.id].ref}
                                        songRef={this.state.songsRefs[song.id].ref}
                                        key={song.id}
                                        id={song.id}
                                        name={song.name}
                                        audioPlayerRef={this.props.audioPlayerRef}
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

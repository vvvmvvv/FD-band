import React from 'react';

import classnames from 'classnames';

import './Slide.scss';

import Song from '../Song/Song'; 

import vinil from '../../../assets/images/vinil.svg'

const VinilTitle = (props) => {
    return (
        <div className="vinil__album">
            <svg 
                viewBox="0 0 1000 1000" 
                className="vinil__svg"
            >  
                <path 
                    className="vinil__path" 
                    id="curve" 
                    d="m150,500c0,-193.37017 156.62983,-350 350,-350c193.37017,0 350,156.62983 350,350c0,193.37017 -156.62983,350 -350,350c-193.37017,0 -350,-156.62983 -350,-350z"
                />
                <text className="vinil__title">
                    <textPath xlinkHref="#curve" className="vinil__text">
                        {props.name}
                    </textPath>
                </text>
            </svg>
        </div>
    )
}

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

    setPlayStatus = (status) => {
        this.setState({
            isPlaying: status
        })
    }

    changeCenteredStatus = () => {
        this.setState({
            isCentered: !this.state.isCentered
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
        const id = e.target.getAttribute('data-id')
        
        this.state.songsRefs.forEach(song => {
            song.ref.current.playSong(false)
        });
        this.state.songsRefs[id].ref.current.playSong()
        
        this.props.audioPlayerRef.current.chooseExactSong(id)
    }

    render () {
        const center = this.state.isCentered ? 'slide--centered' : '';
        const moving = this.state.isMoving ? `slide${(this.state.isNext ? '--move-left' : '--move-right')}` : '';
        const flipped = this.state.isFlipped ? 'flipped' : '';
        return (
            <li className={`slide ${center} ${moving} ${flipped}`}>
                <div className="slide__front">
                    <img className='slide__image' src={this.props.src} alt={this.props.alt} />
                    <div className="slide__date">{this.props.date}</div>
                    <h2 className='slide__title'>{this.props.name}</h2>
                    <div className="slide__show-songs" onClick={this.flipSlide}>
                        <div className="slide__show-songs--title" >Show more</div>
                    </div>
                </div>
                <div className="slide__back">
                    <div className={classnames(
                        'slide__vinil',
                        'vinil',
                        this.state.isPlaying ? '' : 'vinil--paused'
                    )}>
                        <img className="vinil__image" src={vinil} alt="vinil" />
                        {/* <span className="vinil__album">{this.props.name}</span> */}
                        <VinilTitle name={this.props.name} />
                    </div>
                    <div className="slide__details">
                        <ul className="slide__songs songs">
                            {this.props.songs.map(song => {
                                return(
                                    <Song
                                        onClick={this.changeSong}
                                        ref={this.state.songsRefs[song.id].ref}
                                        songRef={this.state.songsRefs[song.id].ref}
                                        slideRef={this.props.slideRef}
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

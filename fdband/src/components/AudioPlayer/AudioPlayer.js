import React from 'react';
import ReactHowler from 'react-howler';

import raf from 'raf' // requestAnimationFrame polyfill
import classnames from 'classnames'

import './AudioPlayer.scss';

import albums from '../../assets/data/albums.json'

const Button = (props) => {
    const { children, className, ...otherProps } = props

    return (
        <button className={classnames('button', className)} {...otherProps}>
            {children}
        </button>
    )
}

export default class AudioPlayer extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            album: albums[props.albumId],
            slideRef: props.slideRef,
            songsRefs: props.songsRefs,
            songId: albums[props.albumId].songs[0].id,
            song: albums[props.albumId].songs[0].name,
            playing: false,
            loaded: false,
            loop: false,
            mute: false,
            seek: 0,
            volume: 1.0,
            duration: 0,
        }
    }

    componentWillUnmount = () => {
        this.clearRAF()
    }

    handleToggle = () => {
        this.setState({
            playing: !this.state.playing
        }, () => {
            if (this.state.songsRefs) {
                this.state.songsRefs[this.state.songId].ref.current.playSong(this.state.playing)
            }
            // this.state.slideRef.current.setPlayStatus(this.state.playing)
        })
    }

    getPlayStatus = () => this.state.playing

    setPlayStatus = (status) => {
        this.setState({
            playing: status
        }, () => {
            this.state.slideRef.current.setPlayStatus(this.state.playing)
        })
    }

    handleOnLoad = () => {
        this.setState({
            loaded: true,
            duration: this.player.duration()
        })
    }

    handleOnPlay = () => {
        this.setState({
            playing: true
        }, () => {
            this.state.slideRef.current.setPlayStatus(this.state.playing)
        })
        this.renderSeekPos()
        this.setPosition(this.getPositionRange()) // !!!!!!!!!!!!!!
    }

    handleOnEnd = () => {
        this.setState({
            playing: false
        })
        this.clearRAF()
    }

    handlePause = () => {
        this.setState({
            playing: false
        })
    }

    handleStop = () => {
        this.player.stop()
        this.setState({
            playing: false
        })
        this.renderSeekPos()
    }

    handleLoopToggle = () => {
        this.setState({
            loop: !this.state.loop
        })
    }

    handleMuteToggle = (e) => {
        if (e.target.classList.contains('music-player__button')) {
            this.setState({
                mute: !this.state.mute
            })
        }
    }

    renderSeekPos = () => {
        this.setState({
            seek: this.player ? this.player.seek() : 0
        })
        if (this.state.playing) {
            this._raf = raf(this.renderSeekPos)
        }
    }

    clearRAF = () => {
        this.setState({
            seek: 0
        })
        raf.cancel(this._raf)
    }

    handleSongChange = (e) => {
        const value = e.target.value ? e.target.value : e;
        const id = value === 'next' ? 
            (this.state.songId + 1 >= this.state.songsRefs.length ? 0 : this.state.songId + 1) : 
            (this.state.songId - 1 < 0 ? this.state.songsRefs.length - 1 : this.state.songId - 1);

        this.setState({
            songId: id,
            song: this.state.album.songs[id].name,
            loaded: false
        }, () => {
            this.state.songsRefs.forEach(song => {
                song.ref.current.playSong(false)
            });
            this.state.songsRefs[id].ref.current.playSong(this.state.playing)
        })
        this.clearRAF()
    }

    handleAlbumChange = (id, slideRef, songsRefs) => {
        this.setState({
            slideRef: slideRef,
            songsRefs: songsRefs,
            album: albums[id],
            songId: albums[id].songs[0].id,
            song: albums[id].songs[0].name,
        }, () => {
            this.state.songsRefs.forEach(song => {
                song.ref.current.playSong(false)
            })
        })
        this.clearRAF()
    }

    chooseExactSong = (id) => {
        this.setState({
            songId: id,
            song: this.state.album.songs[id].name,
            playing: true
        })
        this.clearRAF()
    }

    // styling player ----------------------------------------
    // -------------------------------------------------------

    setPosition = () => {
        let range = document.querySelector('.music-player__range')
        
        setInterval(() => {

            let time = (parseInt(this.state.seek) * 100) / this.state.duration

            range.value = this.state.seek ? time : 0

            this.setPositionRange(range.value)
        }, 500)
    }

    setPositionRange = (percent) => {
        let range = document.querySelector('.music-player__range')

        let rangeFill = "-webkit-linear-gradient(left, var(--secondary-color) 0%, var(--secondary-color) "
        +percent+"%, var(--main-color) "
        +percent+"%, var(--main-color) 100%)"

        if (range !== undefined && range !== null) {
            range.style.background = rangeFill;
        }
    }

    getPositionRange = () => document.querySelector('.music-player__range').value

    handlePlayerRange = () => {
        this.setState({
            seek: (this.getPositionRange() / 100) * this.state.duration
        }, () => {
            this.player.seek(this.state.seek)
            this.setPosition()
        })
    }

    setCurrentTime = (time) => {
        let currentTime = document.querySelector('.music-player__current-value')
        currentTime.textContent = time
    }

    convertTime = (timeInSeconds) => {
        const format = (num, size) => ('00' + num).slice(size * -1)
        const time = parseFloat(timeInSeconds).toFixed(2)
        const minutes = Math.floor(time / 60) % 60
        const seconds = Math.floor(time - minutes * 60)
    
        return `${format(minutes, 2)}:${format(seconds, 2)}`;
    }

    componentDidMount() {
        let range = document.querySelector('.music-player__range')
        range.value = 0
    }

    listenKeyDown = (e) => {
        switch (e.keyCode) {
            case 32:
                this.handleToggle()
                break;
                
            case 37:
                this.handleSongChange('prev')
                break;
                
            case 39:
                this.handleSongChange('next')
                break;
        
            default:
                break;
        }
    }

    render () {
        return (
            <div className="music-player">
                <ReactHowler
                    src={require(`../../assets/songs/${this.state.song}.mp3`)}
                    preload={true}
                    playing={this.state.playing}
                    onLoad={this.handleOnLoad}
                    onPlay={this.handleOnPlay}
                    onEnd={this.handleOnEnd}
                    loop={this.state.loop}
                    mute={this.state.mute}
                    volume={this.state.volume}
                    ref={(ref) => (this.player = ref)}
                />
                <div 
                    className="music-player__panel"
                    onKeyPress={this.listenKeyDown}
                >

                    <Button className={(this.state.loop) 
                        ? 'music-player__button icon-arrow-repeat music-player__button--active' 
                        : 'music-player__button icon-arrow-repeat'} 
                        onClick={this.handleLoopToggle}
                    ></Button>

                    <Button 
                        className="icon-media-rewind music-player__button "  
                        onClick={this.handleSongChange} 
                        value='prev'>
                    </Button>
                
                    <Button   
                        onClick={this.handleToggle}
                        className={(this.state.playing)    
                            ? 'music-player__button music-player__button--pause icon-media-pause' 
                            : 'music-player__button music-player__button--play icon-media-play'}>   
                    </Button>
                    
                    <Button 
                        className="icon-media-fast-forward music-player__button "  
                        onClick={this.handleSongChange} 
                        value='next'>
                    </Button>

                    <Button onClick={this.handleMuteToggle} className={classnames(
                        'music-player__button',
                        'music-player__button--volume',
                        (this.state.mute) ? 'icon-volume-mute1' : 'icon-volume-up',
                    )}>
                        <div className='music-player__volume volume'>
                            <input 
                                className='volume__range'
                                type='range'
                                min='0'
                                max='1'
                                step='.05'
                                value={this.state.volume}
                                onChange={e => this.setState({volume: parseFloat(e.target.value)})}
                            />
                        </div>
                    </Button>

                </div>
                <div className="music-player__range-container">
                    <input
                        className="music-player__range"
                        onInput={this.handlePlayerRange}
                        name="range" 
                        type="range" 
                        min="1"
                        max="100" 
                        id="music-range"></input>
                    <p className="music-player__values">
                        <span className="music-player__current-value">
                            {(this.state.loaded) ? this.convertTime(this.state.seek) : '00:00'}
                        </span>
                        <span className="music-player__final-value">
                            {(this.state.loaded) ? this.convertTime(this.state.duration) : 'Loading'}
                        </span>
                    </p>
                </div>
            </div>
        )
    }
}


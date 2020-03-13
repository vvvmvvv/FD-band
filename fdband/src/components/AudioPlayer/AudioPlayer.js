import React from 'react';
import ReactHowler from 'react-howler';

import raf from 'raf' // requestAnimationFrame polyfill
import classnames from 'classnames'

import './AudioPlayer.scss';

import albums from '../../assets/data/albums.json'

const Button = (props) => {
    const { className, ...otherProps } = props

    return (
        <button className={classnames('button', className)} {...otherProps}>
        
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
            currentPosition: 0,
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

    handleMuteToggle = () => {
        this.setState({
            mute: !this.state.mute
        })
    }

    renderSeekPos = () => {
        this.setState({
            seek: this.player ? this.player.seek() : 0
        })
        if (this.state.playing) {
            this._raf = raf(this.renderSeekPos)
            // this._raf = raf(this.getPositionRange)
        }
    }

    clearRAF = () => {
        this.setState({
            seek: 0
        })
        raf.cancel(this._raf)
    }

    handleSongChange = (e) => {
        const id = e.target.value === 'next' ? 
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

    setPosition (position = 0) {
        let range = document.querySelector('.music-player__range')
        
        setInterval(() => {

            let time = (parseInt(this.state.seek) * 100) / this.state.duration

            range.value = (this.state.seek !== undefined) ? time : 0

            this.setPositionRange(range.value)
        }, 500)


    }

    setPositionRange (percent) {
        let range = document.querySelector('.music-player__range')

        let rangeFill = "-webkit-linear-gradient(left, var(--secondary-color) 0%, var(--secondary-color) "
        +percent+"%, var(--main-color) "
        +percent+"%, var(--main-color) 100%)"

        if (range !== undefined && range !== null) {
            range.style.background = rangeFill;
        }
    }

    getPositionRange () {
        let range = document.querySelector('.music-player__range')
        let value = range.value
        console.log(value)
        return value
    }

    handlePlayerRange () {
        this.state.seek = this.getPositionRange()

        let percent = this.getPositionRange()
        this.setPosition(percent)

        // this.state.currentPosition = this.getPositionRange()
        // this.setState({
        //     currentPosition: this.getPositionRange(),
        //     seek: this.getPositionRange()
        // })

    }

    setCurrentTime (time) {
        let currentTime = document.querySelector('.music-player__current-value')
        currentTime.textContent = time
    }

    convertTime = (timeInSeconds) => {
        const pad = function(num, size) { return ('000' + num).slice(size * -1); }
        let time = parseFloat(timeInSeconds).toFixed(3)
        let minutes = Math.floor(time / 60) % 60
        let seconds = Math.floor(time - minutes * 60)
    
        return `${pad(minutes, 2)}:${pad(seconds, 2)}`;
    }

    componentDidMount() {
        let range = document.querySelector('.music-player__range')
        range.value = 0
    }




    render () {
        return (
        <div className="music-player">
            <ReactHowler
                src={require(`../../assets/songs/${this.state.song}.mp3`)}
                playing={this.state.playing}
                onLoad={this.handleOnLoad}
                onPlay={this.handleOnPlay}
                onEnd={this.handleOnEnd}
                loop={this.state.loop}
                mute={this.state.mute}
                volume={this.state.volume}
                ref={(ref) => (this.player = ref)}
            />
            <div className="music-player__panel">

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
            
                <span   onClick={this.handleToggle} 
                        className={(this.state.playing)    
                            ? 'music-player__button music-player__button--pause icon-media-pause' 
                            : 'music-player__button music-player__button--play icon-media-play'}>   
                </span>
                
                <Button 
                    className="icon-media-fast-forward music-player__button "  
                    onClick={this.handleSongChange} 
                    value='next'>
                </Button>

                <Button className={(this.state.mute) 
                    ? 'music-player__button icon-volume-mute1' 
                    : 'music-player__button icon-volume-up'} 
                    onClick={this.handleMuteToggle}
                ></Button>

            </div>
            <div className="music-player__range-container">
                <input onInput={this.handlePlayerRange} name="range" type="range" min="1" max="100"  id="music-range" className="music-player__range"></input>
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
        // </div>
        
        )
    }
}


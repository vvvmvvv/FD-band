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

        console.log(props);

        this.state = {
            album: albums[props.albumId],
            songsRefs: props.songsRefs,
            songId: albums[props.albumId].songs[0].id,
            song: albums[props.albumId].songs[0].name,
            playing: false,
            loaded: false,
            loop: false,
            mute: false,
            volume: 1.0,
            duration: 0
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
        })
    }

    getPlayStatus = () => this.state.playing

    setPlayStatus = (status) => {
        this.setState({
            playing: status
        })
    }

    setSongsRefs = (refs) => {
        this.setState({
            playing: false,
            songsRefs: refs
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
        })
        this.renderSeekPos()
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
        }, () => {
            console.log(this.state.seek);
        })
        if (this.state.playing) {
            this._raf = raf(this.renderSeekPos)
        }
    }

    clearRAF = () => {
        raf.cancel(this._raf)
    }

    handleSongChange = (e) => {
        const id = e.target.value === 'next' ? 
            (this.state.songId + 1 === this.state.songsRefs.length ? 0 : this.state.songId + 1) : 
            (this.state.songId - 1 < 0 ? this.state.songsRefs.length - 1 : this.state.songId - 1);

        console.log(id);

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
    }

    handleAlbumChange = (id, refs) => {
        this.setState({
            songsRefs: refs,
            album: albums[id],
            songId: albums[id].songs[0].id,
            song: albums[id].songs[0].name,
        }, () => {
            this.state.songsRefs.forEach(song => {
                song.ref.current.playSong(false)
            })
        })
    }

    chooseExactSong = (id) => {
        this.setState({
            songId: id,
            song: this.state.album.songs[id].name,
            playing: true
        })
    }

    render () {
        return (
        <div className='player'>
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

            <div className='player__loading'>{(this.state.loaded) ? 'Loaded' : 'Loading'}</div>

            <div className='player__toggles'>
                <label className='player__loop'>
                    Loop:
                    <input
                    type='checkbox'
                    checked={this.state.loop}
                    onChange={this.handleLoopToggle}
                    />
                </label>
                <label className='player__mute'>
                    Mute:
                    <input
                    type='checkbox'
                    checked={this.state.mute}
                    onChange={this.handleMuteToggle}
                    />
                </label>
            </div>

            <div className='player__status'>
                {
                    `Status:
                    ${(this.state.seek !== undefined) ? Number(this.state.seek).toFixed(2) : '0.00'}
                    /
                    ${(this.state.duration) ? Number(this.state.duration).toFixed(2) : 'NaN'}`
                }
            </div>

            <div className={classnames(
                'player__volume',
                'volume'
            )}>
                <label className='volume__label'>
                    Volume:
                    <span className='volume__slider'>
                        <input
                            type='range'
                            min='0'
                            max='1'
                            step='.05'
                            value={this.state.volume}
                            onChange={e => this.setState({volume: parseFloat(e.target.value)})}
                            style={{verticalAlign: 'bottom'}}
                        />
                    </span>
                    {Number(this.state.volume).toFixed(2)}
                </label>
            </div>

            <Button  
                className='player__button'
                onClick={this.handleSongChange} value='prev'>
            Prev
            </Button>
            <Button 
                className='player__button'
                onClick={this.handleToggle}>
            {(this.state.playing) ? 'Pause' : 'Play'}
            </Button>
            <Button  
                className='player__button'
                onClick={this.handleStop}>
            Stop
            </Button>
            <Button  
                className='player__button'
                onClick={this.handleSongChange} value='next'>
            Next
            </Button>
        </div>
        )
    }
}
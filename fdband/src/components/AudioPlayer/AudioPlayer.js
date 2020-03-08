import React from 'react';
import ReactHowler from 'react-howler';

import raf from 'raf' // requestAnimationFrame polyfill
import classnames from 'classnames'

import './AudioPlayer.scss';

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
            id: props.songs[0].id,
            song: props.songs[0].name,
            playing: false,
            loaded: false,
            loop: false,
            mute: false,
            volume: 1.0
        }
        
        this.handleToggle = this.handleToggle.bind(this)
        this.handleOnLoad = this.handleOnLoad.bind(this)
        this.handleOnEnd = this.handleOnEnd.bind(this)
        this.handleOnPlay = this.handleOnPlay.bind(this)
        this.handleStop = this.handleStop.bind(this)
        this.renderSeekPos = this.renderSeekPos.bind(this)
        this.handleLoopToggle = this.handleLoopToggle.bind(this)
        this.handleMuteToggle = this.handleMuteToggle.bind(this)
        this.handleSongChange = this.handleSongChange.bind(this)
    }

    componentWillUnmount () {
        this.clearRAF()
    }

    handleToggle () {
        this.setState({
            playing: !this.state.playing
        })
    }

    handleOnLoad () {
        this.setState({
            loaded: true,
            duration: this.player.duration()
        })
    }

    handleOnPlay () {
        this.setState({
            playing: true
        })
        this.renderSeekPos()
    }

    handleOnEnd () {
        this.setState({
            playing: false
        })
        this.clearRAF()
    }

    handleStop () {
        this.player.stop()
        this.setState({
            playing: false
        })
        this.renderSeekPos()
    }

    handleLoopToggle () {
        this.setState({
            loop: !this.state.loop
        })
    }

    handleMuteToggle () {
        this.setState({
            mute: !this.state.mute
        })
    }

    renderSeekPos () {
        this.setState({
            seek: this.player.seek()
        })
        if (this.state.playing) {
            this._raf = raf(this.renderSeekPos)
        }
    }

    clearRAF () {
        raf.cancel(this._raf)
    }

    handleSongChange (e) {
        const id = e.target.value === 'next' ? this.state.id + 1 : this.state.id - 1;
        this.setState({
            id: id,
            song: this.props.songs[id].name,
            loaded: false
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
                <label>
                    Loop:
                    <input
                    type='checkbox'
                    checked={this.state.loop}
                    onChange={this.handleLoopToggle}
                    />
                </label>
                <label>
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

            <div className='player__volume'>
                <label className='volume'>
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
                    {this.state.volume.toFixed(2)}
                </label>
            </div>

            <Button onClick={this.handleSongChange} value='prev'>
            Prev
            </Button>
            <Button onClick={this.handleToggle}>
            {(this.state.playing) ? 'Pause' : 'Play'}
            </Button>
            <Button onClick={this.handleStop}>
            Stop
            </Button>
            <Button onClick={this.handleSongChange} value='next'>
            Next
            </Button>
        </div>
        )
    }
}
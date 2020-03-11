import React from 'react';

import './Song.scss';

export default class Song extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            isPlaying: false,
        }
    }

    playSong = (status = true) => {
        this.setState({
            isPlaying: status ? !this.state.isPlaying : false
        }, () => {
            this.props.audioPlayerRef.current.handlePause()
        })
    }

    render () {
        const play = this.state.isPlaying ? 'pause' : 'play';

        return (
            <li className="songs__item" id={this.props.id} onClick={this.props.onClick} className="songs__item"><span className={`icon-media-${play}`}></span>{this.state.name}</li>
        )
    }
}

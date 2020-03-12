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
            this.props.audioPlayerRef.current.setPlayStatus(status)
            this.props.slideRef.current.setPlayStatus(status)
        })
    }

    render () {
        const play = this.state.isPlaying ? 'pause' : 'play';

        return (
            <li data-id={this.props.id} onClick={this.props.onClick} className="songs__item">
                <span data-id={this.props.id} className={`icon-media-${play}`}></span>{this.props.name}</li>
        )
    }
}

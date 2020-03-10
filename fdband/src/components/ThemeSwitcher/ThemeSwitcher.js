import React from 'react';
import ReactDOM from 'react-dom';
import './ThemeSwitcher.scss';

export default class ThemeSwitcher extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            // name: this.props.name,
            darkTheme: this.props.darkTheme,
        }
        this.changeTheme = this.changeTheme.bind(this)
    }

    darkTheme = {
        mainColor: 'blue'
    }

    changeTheme () {
        this.setState({
            isPlaying: !this.state.isPlaying
        })
        console.log('changed')
    }

    

    render () {
        // const play = this.state.isPlaying ? 'pause' : 'play';

        return (
            <span onClick={this.changeTheme} className="themeSwitcher"></span>
         );
    }
}

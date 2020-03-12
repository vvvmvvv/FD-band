import React from 'react';
import './ThemeSwitcher.scss';

export default class ThemeSwitcher extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            // name: this.props.name,
            isDarkTheme: false,
        }
        this.changeTheme = this.changeTheme.bind(this)
    }

    darkTheme = {
        mainColor: '#ededed',
        secondaryColor: 'black',
        logoBg: '#231e1f',
        activeColor: 'orange',
    }

    lightTheme = {
        mainColor: 'black',
        secondaryColor: '#ededed',
        logoBg: 'transparent',
        activeColor: 'orangered',
    }

    changeTheme () {
        let root = document.documentElement;
        let theme = this.state.isDarkTheme ? this.darkTheme : this.lightTheme
        this.setState({
            isDarkTheme: !this.state.isDarkTheme
        })
        root.style.setProperty('--main-color', theme.mainColor);
        root.style.setProperty('--secondary-color', theme.secondaryColor);
        root.style.setProperty('--logo-bg', theme.logoBg);
        root.style.setProperty('--active-color', theme.activeColor);
    }

    

    render () {
        // const play = this.state.isPlaying ? 'pause' : 'play';
        const switherTheme = this.state.isDarkTheme ? '' : 'active'
        return (
            <span onClick={this.changeTheme} className={`themeSwitcher ${switherTheme}`}></span>
         );
    }
}

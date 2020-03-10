import React from 'react';
import './Header.scss';
import Nav from '../Nav/Nav'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'; 

const Header = () => {
    return (
        <React.Fragment>
            {/* <ThemeSwitcher/> */}
            <Nav/>
        </React.Fragment>
    );
}

export default Header;
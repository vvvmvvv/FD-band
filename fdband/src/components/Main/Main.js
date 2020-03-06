import React from 'react';
import './Main.scss';

import panda from '../../assets/images/panda.jpg'
import Slider from '../Slider/Slider';

const Main = () => {
    return (
        <React.Fragment>
            <h1>Главная страница</h1>
            <img src={panda} alt="panda" />

            <Slider/>
        </React.Fragment>
    );
}

export default Main;
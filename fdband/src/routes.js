import React from 'react';

import {Switch, Route} from 'react-router-dom';

import Main from './components/Main/Main';
import Error from './components/Error/Error';
import About from './components/About/About';

import Vladimir from './components/About/Teams/Vladimir/Vladimir'
import Taras from './components/About/Teams/Taras/Taras'
import Aleksandr from './components/About/Teams/Aleksandr/Aleksandr'
import Anna from './components/About/Teams/Anna/Anna'
import Lena from './components/About/Teams/Lena/Lena'

const Routes = () => (
    <Switch>
        <Route exact path='/' component={Main}/>
        <Route exact path='/aboutUs' component={About} />
        <Route exact path='/aboutUs/vladimir' component={Vladimir} />
        <Route exact path='/aboutUs/taras' component={Taras} />
        <Route exact path='/aboutUs/aleksandr' component={Aleksandr} />
        <Route exact path='/aboutUs/anna' component={Anna} />
        <Route exact path='/aboutUs/lena' component={Lena} />
        <Route exact path='*' component={Error} />
    </Switch>
);

export default Routes;
import React from 'react';

import {Switch, Route} from 'react-router-dom';

import Main from './components/Main/Main';
import Error from './components/Error/Error';

const Routes = () => (
    <Switch>
        <Route exact path='/' component={Main}/>
        <Route exact path='*' component={Error} />
    </Switch>
);

export default Routes;
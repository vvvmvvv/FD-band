import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Taras.scss';

const Taras = () => {
    return (
        <React.Fragment>
            <button><Link to="/aboutUs#ourBand">Back to team</Link></button>
            <h1>Page by Taras</h1>
        </React.Fragment>
    );
}

export default withRouter(Taras);
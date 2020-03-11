import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Taras.scss';

const Taras = () => {
    return (
        <React.Fragment>
            <div className="padding-top">
            <Link to="/aboutUs#ourBand">Back to team</Link>
            <h1>Page by Taras</h1>
            </div>
        </React.Fragment>
    );
}

export default withRouter(Taras);
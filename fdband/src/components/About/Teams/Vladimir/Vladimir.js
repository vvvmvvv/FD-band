import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Vladimir.scss';

const Vladimir = () => {
    return (
        <React.Fragment>
            <Link to="/aboutUs#ourBand">Back to team</Link>
            <h1>Page by Vladimir</h1>
        </React.Fragment>
    );
}

export default withRouter(Vladimir);
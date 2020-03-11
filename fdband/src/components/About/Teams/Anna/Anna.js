import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Anna.scss';

const Anna = () => {
    return (
        <React.Fragment>
            <Link to="/aboutUs#ourBand">Back to team</Link>
            <h1>Page by Anna</h1>
        </React.Fragment>
    );
}

export default withRouter(Anna);
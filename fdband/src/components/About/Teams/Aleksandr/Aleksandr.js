import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Aleksandr.scss';

const Aleksandr = () => {
    return (
        <React.Fragment>
            <Link to="/aboutUs#ourBand">Back to team</Link>
            <h1>Page by Aleksandr</h1>
        </React.Fragment>
    );
}

export default withRouter(Aleksandr);

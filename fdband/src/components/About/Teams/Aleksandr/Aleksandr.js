import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Aleksandr.scss';

const Aleksandr = () => {
    return (
        <React.Fragment>
            <div className="padding-top">
            <Link to="/aboutUs#ourBand">Back to team</Link>
            <h1>Page by Aleksandr</h1>
            </div>
        </React.Fragment>
    );
}

export default withRouter(Aleksandr);

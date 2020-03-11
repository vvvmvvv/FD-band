import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Lena.scss';

const Lena = () => {
    return (
        <React.Fragment>
            <Link to="/aboutUs#ourBand">Back to team</Link>
            <h1>Page by Lena</h1>
        </React.Fragment>
    );
}

export default withRouter(Lena);
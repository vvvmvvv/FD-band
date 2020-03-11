import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Anna.scss';

const Anna = () => {
    return (
        <React.Fragment>
            <div className="padding-top">
                <Link to="/aboutUs#ourBand">Back to team</Link>

                <h2 className="title">Anna Androsiuk</h2>
            </div>
        </React.Fragment>
    );
}

export default withRouter(Anna);
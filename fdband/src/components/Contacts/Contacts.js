import React from 'react';
import { Link} from 'react-router-dom';
import './Contacts.scss';


const Contacts = () => {
    return (
        <React.Fragment>
            <div className="padding-top">
                
            <h1>CONTACTS PAGE !!!!!!!</h1>

            <div className="card__title">Volodymyr Mikulin</div>
            <Link to="/aboutUs/vladimir" className="card__button">show more</Link>

            <div className="card__title">Taras Moskalenko</div>
            <Link to="/aboutUs/taras" className="card__button">show more</Link>

            <div className="card__title">Alexander Lesiuk</div>
            <Link to="/aboutUs/aleksandr" className="card__button">show more</Link>

            <div className="card__title">Ann Androsiuk</div>
            <Link to="/aboutUs/anna" className="card__button">show more</Link>

            <div className="card__title">Lena Vu</div>
            <Link to="/aboutUs/lena" className="card__button">show more</Link>
            </div>


        </React.Fragment>
    );
}

export default Contacts;
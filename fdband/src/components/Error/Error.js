import React from "react";
import './Error.scss'
import errorImg from '../../assets/images/error1.png'



const Error = () =>{
    return(
        <React.Fragment>
            <img className="errorImg" src={errorImg} alt="error"/>
        </React.Fragment>

    );
}
export default Error;
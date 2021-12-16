import React from 'react';
import "./Restart.css";
import { NavLink } from 'react-router-dom';


export const Restart = () => {
    return (
        <div className="result-wrapper">
        <NavLink to='/'>
        <input className="result-button" type="button" value="RESTART" />
        </NavLink>{' '}
      </div>
    )
}

export default Restart;


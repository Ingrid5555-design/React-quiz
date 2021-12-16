import React from 'react';
import './Start.css';
import { NavLink } from 'react-router-dom';

const Start = () => {
  return (
    <div className='start-wrapper'>
      <div className='image'>
        <img src='/images/car-picture.jpg' alt='' />
      </div>
      <NavLink to='/quiz'>
        <input className='start-button' type='button' value='START' />
      </NavLink>{' '}
      {/*Mygtukas start visada ves i pirma klausima*/}
    </div>
  );
};

export default Start;

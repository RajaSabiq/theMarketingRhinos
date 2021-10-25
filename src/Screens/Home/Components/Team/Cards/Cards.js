import React from 'react';
import './Card.css';

function Cards({ img, name, jobTitle, icon }) {
  return (
    <div className='teamMember'>
      <div className='teamImageSection'>
        <img className='teamPersonImage' src={img} alt='' />
        <div className='teamIcon'>
          <img src={icon} alt='' />
        </div>
      </div>
      <div className='personInfo'>
        <h3 className='full-name'>{name}</h3>
        <span className='speciality'>{jobTitle}</span>
      </div>
    </div>
  );
}

export default Cards;

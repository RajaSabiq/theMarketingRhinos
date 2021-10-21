import React from 'react';
import './Card.css';

function Cards({ img, name, jobTitle, icon }) {
  return (
    <div class='col-sm-6 col-lg-4 col-xl-3'>
      <div class='single-person'>
        <div class='person-image'>
          <img src={img} alt='' />
          <span class='icon'>
            <i class='fab fa-wordpress-simple'></i>
          </span>
        </div>

        <div class='person-info'>
          <h3 class='full-name'>{name}</h3>
          <span class='speciality'>{jobTitle}</span>
        </div>
      </div>
    </div>
  );
}

export default Cards;

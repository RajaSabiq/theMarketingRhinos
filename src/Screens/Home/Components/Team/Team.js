import React from 'react';
import hassan from '../../../../Assets/Hassan.jpeg';
import Cards from './Cards/Cards';
import './Team.css';

function Team() {
  return (
    <section class='section-team'>
      <div class='container'>
        <div class='row justify-content-center text-center'>
          <div class='col-md-8 col-lg-6'>
            <div class='header-section'>
              <h2 class='title'>Our Experts</h2>
              <h3 class='small-title'>Let's meet with our team members</h3>
            </div>
          </div>
        </div>
        <div class='row'>
          <Cards />
        </div>
      </div>
    </section>
  );
}

export default Team;

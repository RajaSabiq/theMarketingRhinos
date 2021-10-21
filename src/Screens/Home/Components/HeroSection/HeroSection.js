import React from 'react';
import banner from '../../../../Assets/banner3.jpg';
import Button from '../../../../Global/Components/Buttons/Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='heroSectionContainer'>
      <div className='heroSectionContactUs'>
        <h2>Welcome to The Marketing Rhinos</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <Button widths={135} marginTop={35}>
          <span>Contact Us</span>
        </Button>
      </div>
      <img src={banner} alt='' className='heroSectionBanner' />
    </div>
  );
}

export default HeroSection;

import React from 'react';
import hassan from '../../../../Assets/Hassan.jpeg';
import Aleena from '../../../../Assets/Aleena.jpeg';
import Umar from '../../../../Assets/Umar.jpg';
import Zaka from '../../../../Assets/Zaka.jpeg';
import Sabiq from '../../../../Assets/Sabiq.jpg';
import Abdullah from '../../../../Assets/Abdullah.jpg';
import Ammara from '../../../../Assets/Ammara.jpeg';
import Cards from './Cards/Cards';
import Slider from 'react-slick';
import hr from '../../../../Assets/hr.svg';
import projectManeger from '../../../../Assets/manager.png';
import boss from '../../../../Assets/boss.png';
import ceo from '../../../../Assets/ceo.png';
import seo from '../../../../Assets/seo.png';
import web from '../../../../Assets/web-programming.png';
import './Team.css';

function Team() {
  const teamList = [
    {
      icon: hr,
      img: hassan,
      name: 'Hassan Murtaza',
      description: 'Hr Manager',
    },
    {
      icon: boss,
      img: Aleena,
      name: 'Aleena Abbas',
      description: 'Director',
    },
    // {
    //   img: Ammara,
    //   icon: ceo,
    //   name: 'Ammara',
    //   description: 'CEO',
    // },
    // {
    //   icon: hr,
    //   img: Sabiq,
    //   name: 'Raja Sabiq Arfan',
    //   description: 'IT Head',
    // },
    // {
    //   icon: projectManeger,
    //   img: Umar,
    //   name: 'M Umar Qayyum',
    //   description: 'Project Manager',
    // },
    // {
    //   icon: seo,
    //   img: Zaka,
    //   name: 'Zaka Ullah',
    //   description: 'SEO Expert',
    // },
    // {
    //   icon: web,
    //   img: Abdullah,
    //   name: 'Abdullah Javed',
    //   description: 'Web Developer',
    // },
  ];
  return (
    <div class='teamContainer'>
      <div class='header-section'>
        <h2 class='title'>Our Experts</h2>
        <h3 class='small-title'>Let's meet with our team members</h3>
      </div>
      <Slider
        dots={true}
        infinite={false}
        speed={500}
        slidesToShow={3}
        slidesToScroll={1}
        className='sliderTeam'
      >
        {teamList.map((i) => (
          <Cards
            img={i.img}
            jobTitle={i.description}
            name={i.name}
            icon={i.icon}
          />
        ))}
      </Slider>
    </div>
  );
}

export default Team;

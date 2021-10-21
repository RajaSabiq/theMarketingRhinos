import React from 'react';
import HeroSection from './Components/HeroSection/HeroSection.js';
import Projects from './Components/Projects/Projects.js';
import Services from './Components/Services/Services.js';
import Team from './Components/Team/Team.js';
import WhyChoiceUs from './Components/WhyChooseUS/WhyChooseUs.js';
import './Home.css';

function Home() {
  return (
    <div className='homeContainer'>
      <HeroSection />
      <WhyChoiceUs />
      <Services />
      <Projects />
      <Team />
    </div>
  );
}

export default Home;

import React, { useState } from 'react';
import logo from '../../../Assets/logo.png';
import Button from '../Buttons/Button';
import './NavBar.css';

function NavBar() {
  const [isShadow, setIsShadow] = useState();
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setIsShadow(true);
    } else {
      setIsShadow(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);
  return (
    <header
      className='navBarContainer'
      style={{ boxShadow: isShadow && '0 3px 10px #ccc' }}
    >
      <img src={logo} alt='Logo' className='navBarLogo' />
      <div className='navBarItems'>
        <span className='navBarItem navbaractiveitem'>Home</span>
        <span className='navBarItem'>About</span>
        <span className='navBarItem'>Services</span>
        <span className='navBarItem'>Projects</span>
        <span className='navBarItem'>Blog</span>
        <span className='navBarItem'>FAQ</span>
        <Button>
          <span>Contact</span>
        </Button>
      </div>
    </header>
  );
}

export default NavBar;

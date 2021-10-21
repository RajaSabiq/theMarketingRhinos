import React from 'react';
import banner from '../../../../Assets/dd.jpg';
import './Aboutus.css';

function Aboutus() {
  return (
    <div className='aboutUsContainer'>
      <div className='aboutUsLeft'>
        <h2>
          <u>Who we are</u>
        </h2>
        <span>
          We watch over your entire network, taking the management and hassle of
          maintaining it off your hands.We respond within 30 minutes or less,
          and most issues are resolved remotely by our network operations team.
          No matter that trade you belong to, each business should become
          digital. The Marketing Rhinos, solutions is one among the
          distinguished software system corporations that facilitates different
          organizations to rework into digital enterprises. It differentiates
          you from competitors within the market and provides higher engagement
          with clients, partners and employees.
        </span>
      </div>
      <img src={banner} alt='' className='aboutUsCenter' />
      <div className='aboutUsRight'>
        <h2>
          <u>Our Goal</u>
        </h2>
        <span>
          We tend to clearly perceive that each one customer landscapes don't
          seem to be of same kind. That’s why Signity sourcing methodology
          encompasses a transparent resolution particularly crafted to handle
          the clients' issues. we provide a phased approach towards your
          business drivers and help IT organizations to align their goals
          towards the vision of the business. Our main aim is to develop during
          a constant manner and become a number one entertainer during this
          competitive international marketplace. Fortunately, we've been able to
          gather a crew of pros that may form and mildew their collective
          experiences, all of them posses outstanding talent that can facilitate
          to accelerate your organization.
        </span>
      </div>
    </div>
  );
}

export default Aboutus;

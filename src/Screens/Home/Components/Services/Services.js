import React from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLaptopCode,
  faChartLine,
  faPaintBrush,
  faDatabase,
  faMobileAlt,
  faFileInvoice,
  faMoneyCheckAlt,
  faNetworkWired,
} from '@fortawesome/free-solid-svg-icons';

function Services() {
  return (
    <div class='serviceContainer'>
      <h1>Our Services</h1>
      <h3 class='small-title'>Services that we provide</h3>
      <div class='row'>
        <div class='service'>
          <FontAwesomeIcon icon={faLaptopCode} size='3x' />
          <h2>Web Design</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            quae?
          </p>
        </div>
        <div class='service'>
          <FontAwesomeIcon icon={faChartLine} size='3x' />
          <h2>Marketing</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            quae?
          </p>
        </div>
        <div class='service'>
          <FontAwesomeIcon icon={faPaintBrush} size='3x' />
          <h2>Graphics</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            quae?
          </p>
        </div>
        <div class='service'>
          <FontAwesomeIcon icon={faDatabase} size='3x' />
          <h2>Data Analysis</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            quae?
          </p>
        </div>
        <div class='service'>
          <FontAwesomeIcon icon={faMobileAlt} size='3x' />
          <h2>App Development</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            quae?
          </p>
        </div>
        <div class='service'>
          <FontAwesomeIcon icon={faFileInvoice} size='3x' />
          <h2>Accounting</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            quae?
          </p>
        </div>
        <div class='service'>
          <FontAwesomeIcon icon={faMoneyCheckAlt} size='3x' />
          <h2>Payroll</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            quae?
          </p>
        </div>
        <div class='service'>
          <FontAwesomeIcon icon={faNetworkWired} size='3x' />
          <h2>Networking</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            quae?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;

import React from 'react';
import './WhyChooseUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTags,
  faStickyNote,
  faClock,
  faUserAstronaut,
  faBrain,
  faMobileAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Card } from '../../../../Global/Style/GlobalStyleSheet';

function WhyChooseUs() {
  const item = [
    {
      img: faTags,
      color: '#FEC260',
      description:
        'Our costs are competitive and reasonable. Any unforeseen or extra costs must be pre-approved by you. Which is how our clients are treated.',
    },
    {
      img: faStickyNote,
      color: '#A12568',
      description:
        "We know what it's like because we've been there and done it. When you choose us, you'll get the benefit of our 15 years of a experience.",
    },
    {
      img: faClock,
      color: '#3B185F',
      description:
        'Because we are digitally savvy. We can take your message anywhere it needs to go thanks to our working knowledge of web, SEO, and social media.',
    },
    {
      img: faUserAstronaut,
      color: '#FF4C29',
      description:
        'First Impressions is made up of professionals with agency expertise from a variety of backgrounds. As a result, First Impressions will never assign any account to second-tier.',
    },
    {
      img: faBrain,
      color: '#2C394B',
      description:
        "We keep an eye on all of our clients' networks 24/7/365. We keep an eye on your entire network, removing the burden of management and upkeep from your shoulders.",
    },
    {
      img: faMobileAlt,
      color: '#2C061F',
      description:
        'We bring our diverse background of advertising, design, public relations, research, and strategic planning. Your materials will not only look fantastic, but they will also provide results.',
    },
  ];
  return (
    <div className='whyChoiceUsContainer'>
      <h2>Why Choose US</h2>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </span>
      <div className='whyChoiceUsCards'>
        {item.map((i) => (
          <Card color={i.color}>
            <div className='cardItemsContainer'>
              <FontAwesomeIcon icon={i.img} size='2x' color={i.color} />
              <span>{i.description}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default WhyChooseUs;

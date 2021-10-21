import React from 'react';
import './BusinessSection.css';
import Carousel from 'react-elastic-carousel';
import Card from '../../../../Global/Components/Card/Card';
import analytics from '../../../../Assets/analytics.png';
import friends from '../../../../Assets/friends.png';
import insight from '../../../../Assets/insight.png';
import socailCare from '../../../../Assets/social-care.png';

function BusinessSection() {
  const cardValue = [
    {
      img: analytics,
      color: 'darkgreen',
      Title: 'Analytics',
      Description:
        'An Infomation administration arrangement and commerce insights subset, alludes to the utilizr of strategies such as information mining to analyze and change information into valuable data.',
    },
    {
      img: insight,
      Title: 'Customer Insights',
      color: 'gold',
      Description:
        "It's all around analyzing your client information to way better get who your clients are, and what they need from your brand, to assist you to create superior choices almost how, when, and what to offer them.",
    },
    {
      img: friends,
      Title: 'Mobile friendly',
      color: 'darkblue',
      Description:
        'Nowadays, everybody has smartphones with them, always communicating and seeking out data. Having a mobile-friendly website has become an essential component of having an online presence.',
    },
    {
      img: socailCare,
      Title: 'Dedicated support',
      color: 'darkRed',
      Description:
        "It's simple to get in touch with us. You'll be able to ask any queries you have and track our progress on your site. You'll also be able to send us your monthly website modifications, and we'll get to work. ",
    },
  ];

  return (
    <div className='businessSectionConatiner'>
      <h1>Let's make your own business</h1>
      <h4>
        At The Marketing Rhinos, we promise to share the value of our experience
        with you and to assist you in keeping up with digital customer
        experience advancements. We know the landscape inside and out, and we
        don't put on a show — we're completely transparent.
      </h4>
      <Carousel
        itemsToShow={3}
        showArrows={false}
        focusOnSelect={true}
        enableMouseSwipe={true}
      >
        {cardValue.map((item) => (
          <Card direction='column' height={320} color={item.color}>
            <img src={item.img} alt='' className='carouselImg' />
            <div className='carouselRight'>
              <p>{item.Title}</p>
              <span>{item.Description}</span>
            </div>
          </Card>
        ))}
      </Carousel>
    </div>
  );
}

export default BusinessSection;

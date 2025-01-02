import React, { useState } from 'react';
import './Services.css';
import logo_png from '../../assets/logo.png';

const Services = () => {
  const [showAll, setShowAll] = useState(false);

  const services = [
    {
      title: 'Front-End Development',
      description: 'I craft visually appealing, responsive, and user-friendly interfaces using HTML, CSS, and JavaScript. My expertise includes modern frameworks like React.js to deliver seamless user experiences.',
      icon: 'https://img.icons8.com/ios-filled/50/FFFFFF/web.png',
    },
    {
      title: 'UI/UX Design',
      description: 'I design intuitive user interfaces with a focus on accessibility and aesthetics. I ensure that every design is aligned with user needs and enhances the overall usability of your application.',
      icon: 'https://img.icons8.com/ios-filled/50/FFFFFF/design.png',
    },
    {
      title: 'Performance Optimization',
      description: 'I optimize websites for speed and performance, ensuring faster load times and better SEO rankings. My skills include code refactoring and implementing best practices for front-end performance.',
      icon: 'https://img.icons8.com/ios-filled/50/FFFFFF/code.png',
    },
    {
      title: 'Back-End Development',
      description: 'I specialize in building secure and scalable server-side applications, with experience in Node.js, Express, and database management like MongoDB and SQL.',
      icon: 'https://img.icons8.com/ios-filled/50/FFFFFF/database.png',
    },
    {
      title: 'Mobile App Development',
      description: 'I develop high-performance mobile apps for both Android and iOS using React Native, ensuring smooth user experiences across all devices.',
      icon: 'https://img.icons8.com/ios-filled/50/FFFFFF/mobile.png',
    },
    {
      title: 'SEO & Digital Marketing',
      description: 'I help you improve your search engine rankings, increase organic traffic, and implement strategies to boost your online visibility through SEO and content marketing.',
      icon: 'https://img.icons8.com/ios-filled/50/FFFFFF/seo.png',
    }
  ];

  const visibleServices = showAll ? services : services.slice(0, 3);

  return (
    <div id='services' className='services'>
      <div className="service-title">
        <h1>My Services</h1>
        <img src={logo_png} alt="logo" />
      </div>
      <div className='services-container'>
        {visibleServices.map((service, index) => (
          <div className='service' key={index}>
            <div className='service-icon'>
              <img src={service.icon} alt={`${service.title} Icon`} />
            </div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      <button className="show-more-btn" onClick={() => setShowAll(!showAll)}>
        {showAll ? 'Show Less' : 'Show More Services'}
      </button>
    </div>
  );
};

export default Services;

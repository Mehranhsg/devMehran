import React from "react";
import "./Hero.css";
import profile_img from '../../assets/profile_img.png';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-container');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1><span>I'm Mehran Khan,</span> frontend developer based in PAK.</h1>
      <p>
        Front-end web developer skilled in creating responsive, user-friendly interfaces using HTML, CSS, and JavaScript. Passionate about delivering seamless user experiences and modern design solutions.
      </p>
      <div className="hero-action">
        <div className="hero-connect" onClick={scrollToContact}>Connect With Me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;

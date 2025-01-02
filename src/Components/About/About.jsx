import React from "react";
import "./About.css";
import logo_png from "../../assets/logo.png";
import profile_img from "../../assets/profile_img.png";
const About = () => {
  return (
    <div id='about' className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={logo_png} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} width={250} alt="" />
        </div>
        <div className="about-right">
          <div className="about-about-para">
            <p>
              Hello! I'm a passionate and creative Front-End Web Developer
              dedicated to crafting engaging and user-friendly web experiences.
              With a keen eye for design and a strong foundation in coding, I
              specialize in transforming ideas into visually appealing and
              functional websites.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Bostrap & talwind</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>React Js</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>javaSrift</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievments">
        <div className="about-achievment">
          <h1>2+</h1>
          <p>YEAR OF EXPERIENCE</p>
        </div>
      
      <hr />
   
        <div className="about-achievment">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
    
      <hr />
        <div className="about-achievment">
          <h1>40+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
   </div>
  );
};

export default About;

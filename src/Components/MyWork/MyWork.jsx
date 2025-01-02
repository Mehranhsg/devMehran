import React, { useState } from 'react';
import './MyWork.css';
import logo_png from '../../assets/logo.png';

const MyWork = () => {
  const allProjects = [
    {
      title: 'E-Commerce Website',
      description: 'A modern e-commerce platform with React, Redux, and REST APIs, featuring responsive design and seamless user experience.',
      img: 'https://via.placeholder.com/300',
      link: 'https://example.com',
    },
    {
      title: 'Portfolio Website',
      description: 'A sleek and professional portfolio built with HTML, CSS, and JavaScript, showcasing creative designs and animations.',
      img: 'https://via.placeholder.com/300',
      link: 'https://example.com',
    },
    {
      title: 'Blog Platform',
      description: 'A powerful blogging platform with Node.js, Express, and MongoDB, enabling users to create, edit, and comment in real-time.',
      img: 'https://via.placeholder.com/300',
      link: 'https://example.com',
    },
    {
      title: 'Weather App',
      description: 'A real-time weather app using React.js and OpenWeatherMap API, with location-based forecasts and clean UI.',
      img: 'https://via.placeholder.com/300',
      link: 'https://example.com',
    },
    {
      title: 'Task Manager',
      description: 'A task management tool with drag and drop features built using React and Firebase.',
      img: 'https://via.placeholder.com/300',
      link: 'https://example.com',
    },
    {
      title: 'Fitness Tracker',
      description: 'A fitness tracking app that syncs with wearable devices to log workouts and progress.',
      img: 'https://via.placeholder.com/300',
      link: 'https://example.com',
    },
    // Add more projects here
  ];

  // Set the default state to show 3 projects initially
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [showMore, setShowMore] = useState(true); // State to toggle between "Show More" and "Show Less"

  const toggleProjects = () => {
    if (showMore) {
      setVisibleProjects(allProjects.length); // Show all projects
    } else {
      setVisibleProjects(3); // Show only the first 3 projects
    }
    setShowMore(!showMore); // Toggle the state
  };

  return (
    <div id='projects' className="projects">
      <div className="projects-title">
        <h1>My Projects</h1>
        <img src={logo_png} alt="Logo" />
      </div>
      <div className="projects-container">
        {allProjects.slice(0, visibleProjects).map((project, index) => (
          <div className="project" key={index}>
            <div className="project-image">
              <img src={project.img} alt={project.title} />
            </div>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
      <button className="show-more-button" onClick={toggleProjects}>
        {showMore ? 'Show More' : 'Show Less'}
      </button>
    </div>
  );
};

export default MyWork;

import React from 'react';
import './HomePage.css'; 
import image from "./Megha Menon.jpeg"

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="sidebar">
        <nav className="navigation">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#work">Work</a></li>
          </ul>
        </nav>
        <div className="vertical-text">
          <span>Developer</span>
          <span>Designer</span>
          <span>Customer Experience</span>
          <span>Chef</span>
        </div>
        <div className="social-icons">
          <a href="#linkedin"><i className="fab fa-linkedin"></i></a>
          <a href="#github"><i className="fab fa-github"></i></a>
        </div>
        <h1>Megha Menon</h1>
      </div>
      <div className="main-content">
        <img src={image} alt="Megha Menon" />
      </div>
    </div>
  );
}

export default HomePage;
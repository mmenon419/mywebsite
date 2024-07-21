import React from 'react';
import './HomePage.css'; 
import image from "./Megha Menon.jpeg"

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="left-panel">
        <nav className="navigation">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#work">Work</a></li>
          </ul>
        </nav>
        <h1>Megha Menon</h1>
      </div>
      <div className="right-panel">
        <img src={image} alt="Megha Menon" />
      </div>
    </div>
  );
}

export default HomePage;

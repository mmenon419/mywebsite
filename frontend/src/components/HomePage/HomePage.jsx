import React from 'react';
import './HomePage.css'; 
import image from "./Megha Menon.jpeg"

const HomePage = () => {
  return (
    <div className="homepage">
      <section className="section" id="section1">
        <div className="sidebar">
          <h1 className="vertical-text">Megha<br />Menon</h1>
        </div>
        <div className="main-content">
          <img src={image} alt="Megha Menon" />
        </div>
      </section>
      <section className="section" id="section2">
        <div className="about-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>
      <section className="section" id="section3">
        <h2>Work</h2>
      </section>
    </div>
  );
}

export default HomePage;

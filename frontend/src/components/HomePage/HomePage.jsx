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
        <h2>About</h2>
      </section>
      <section className="section" id="section3">
        <h2>Work</h2>
      </section>
    </div>
  );
}

export default HomePage;

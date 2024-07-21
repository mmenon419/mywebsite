import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import About from './components/About';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home'; // Correct the import statement to match your component name
import Contact from './components/Contact';
import Donate from './components/Donate';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Adjust the path and element props */}
          <Route path="/about" element={<About />} /> {/* Adjust the path and element props */}
          <Route path="/contact" element={<Contact />} /> {/* Adjust the path and element props */}
          <Route path="/donate" element={<Donate />} /> {/* Adjust the path and element props */}


        </Routes>
      </Router>
    </>
  );
}

export default App;

import React from "react";

import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import PageNotFound from "./components/PageNotFound";
import Contact from "./components/Contact"
import RoboWidget from "./components/Robowidget";
import { Route, Routes } from "react-router-dom";
import "./robo.css";
import "./nav.css";

function App() {
  return (
    <>
      {/* Vimeo Video Background - Simple version */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        overflow: 'hidden',
        backgroundColor: '#121212' // Fallback background
      }}>
        <iframe
          src="https://player.vimeo.com/video/315384106?background=1&autoplay=1&loop=1&muted=1&controls=0&autopause=0"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
          frameBorder="0"
          allow="autoplay; fullscreen; encrypted-media"
          allowFullScreen
          title="Background Video"
        ></iframe>
        
        {/* Dark overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1
        }}></div>
      </div>

      {/* Your content */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Navbar />
     
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/projects" element={<Projects />} /> 
          <Route  path="/contact" element={<Contact/>}/>
        </Routes>
      </div>

    </>
  );
}

export default App;

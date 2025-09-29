import React from "react";
import Hero from "./components/hero";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import PageNotFound from "./components/PageNotFound";
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
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
// import Hero from "./components/hero"
// import './App.css'
// import Navbar from "./components/Navbar"
// import Home from "./components/Home"
// import About from "./components/About"
// import Experience from "./components/Experience"
// import Projects from "./components/Projects"
// import PageNotFound from "./components/PageNotFound"
// import RoboWidget from "./components/Robowidget"
// //import Robo from "./components/robo"
// import { Route, Routes } from "react-router-dom"
// import "./nav.css"
// import "./robo.css";


// function App() {

//   return (
// <>
//      <Navbar/> 
//     {/* < RoboWidget/> */}

//    <div style={{ backgroundColor: "#121212", minHeight: "100vh" }}>
//       {/* All your routes and components here */}
    
      
// <Routes>
//   <Route path="*" element={<PageNotFound/>}></Route>
//   <Route path="/home" element= {<Home/> }></Route>
//   <Route path="/about" element={<About/>}></Route>
//   <Route path="/experience" element={<Experience/>} ></Route>
//   <Route path="/projects" element={<Projects/>} ></Route>
// </Routes>
//     </div>

    
//   </>
//   )

// }

// export default App

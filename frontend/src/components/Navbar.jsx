import React from "react";
 import { Link } from "react-router-dom";

// import Home from "./Home";
// import About from "./About";
// import Experience from "./Experience";
// import Projects from "./Projects";

// import Education from "./Education";

function Navbar() {
  return (
    <>
      <div className="navbar navbar-expand-lg d-flex justify-content-between">
        <ul className="mt-3">

          <li className="me-3"><a href="/home"></a></li> 
          
            <li className="me-3 name "><h2>Moiz Shaikh</h2></li>
          <li className="me-3"><a href="/about">About</a></li>
          <li className="me-3">
            <Link to="/projects" className="nav-link">
             Projects
            </Link>
          </li>
          <li className="me-3"><a href="/education">Education</a></li>
          <li className="me-3"><a href="/experience">Experience</a></li>
        </ul>
 
      </div>
      
    </>
  );
}

export default Navbar;

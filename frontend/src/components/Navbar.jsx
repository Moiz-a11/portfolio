import React from "react";
 import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar navbar-expand-lg d-flex justify-content-between">
        <ul className="mt-3">

          <li className="me-3"><a href="/home"></a></li> 
          
            <li className="me-3 name "><h2>Moiz Shaikh</h2></li>
          <li className="me-3  "><a href="/">Home</a></li>

          <li className="me-3"><a href="/about">About</a></li>
          <li className="me-3">
            <Link to="/projects" className="nav-link">
             Projects
            </Link>
          </li>
          <li className="me-3"><a href="/contact">Contact</a></li>
        </ul>
 
      </div>
      
    </>
  );
}

export default Navbar;

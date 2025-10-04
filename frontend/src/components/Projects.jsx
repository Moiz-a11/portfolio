

import React from "react";

function Projects() {
  return (
    <div className="parent">
      <h1 className="offset-4 mt-5">welcome on projects</h1>

      <div className="d-flex flex-column align-items-center justify-content-center parent-child">
        
        
        {/* Project 1 */}

        <div className="card mt-3 ">
          <img
            className="card-img-top"
            src="https://plus.unsplash.com/premium_vector-1722961878690-6787d1a9cc16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8"
            alt=""
          />

          <div className="card-body ">
            <h5 className="card-title">wanderlust</h5>
            <p className="card-text">
              A travel booking application with real-time availability and
              seamless user experience
            </p>
            <div className=" tools d-flex align-items-center justify-content-around  ">
              <p>Bootstrap</p>
              <p>javascript</p>
              <p>Node</p>
              <p>Express</p>
              <p>MongoDB</p>
            </div>
            <a className="card-btn" href="">
              View Project
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="card  mt-3">
          <img
            className="card-img-top"
            src="https://areknawo.com/images/2020/04/cover-01.png"
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title">Todo App</h5>
            <p className="card-text">
              {" "}
              I designed and developed a full-stack To-Do app that offers users
              a seamless experience for creating, tracking, and managing their
              tasks
            </p>
            <div className=" tools d-flex align-items-center justify-content-around  ">
              <p>Bootstrap</p>
              <p>javascript</p>
              <p>Node</p>
              <p>Express</p>
              <p>MongoDB</p>
            </div>
            <a className="card-btn" href="">
              View Project
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="card  mt-3 ">
          <img className="card-img-top" src="" alt="" />
          <div className="card-body">
            <h5 className="card-title">wanderlust</h5>
            <p className="card-text"></p>
            <a className="card-btn" href="">
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

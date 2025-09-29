


// import React from "react";

// function Projects() {
//     return (
//         <div style={{ backgroundColor: "#121212", minHeight: "100vh", color: "white", padding: "20px" }}>
//             <h1 className="text-center mt-5">Welcome to Projects</h1>

//             <div className="d-flex flex-column align-items-center justify-content-center mt-4">
                
//                 {/* Project 1 */}
//                 <div className="card mt-3" style={{ width: "18rem", backgroundColor: "#1e1e1e", color: "white" }}>
//                     <img 
//                         className="card-img-top" 
//                         src="https://via.placeholder.com/286x180?text=Project+1" 
//                         alt="Wanderlust Project" 
//                     />
//                     <div className="card-body">
//                         <h5 className="card-title">Wanderlust</h5>
//                         <p className="card-text">A travel booking application with real-time availability and seamless user experience.</p>
//                         <a className="btn btn-primary" href="https://github.com/yourusername/wanderlust">
//                             View Project
//                         </a>
//                     </div>
//                 </div>

//                 {/* Project 2 */}
//                 <div className="card mt-3" style={{ width: "18rem", backgroundColor: "#1e1e1e", color: "white" }}>
//                     <img 
//                         className="card-img-top" 
//                         src="https://via.placeholder.com/286x180?text=Project+2" 
//                         alt="E-Commerce Project" 
//                     />
//                     <div className="card-body">
//                         <h5 className="card-title">E-Commerce Store</h5>
//                         <p className="card-text">Full-stack e-commerce platform with payment integration and admin dashboard.</p>
//                         <a className="btn btn-primary" href="https://github.com/yourusername/ecommerce">
//                             View Project
//                         </a>
//                     </div>
//                 </div>

//                 {/* Project 3 */}
//                 <div className="card mt-3" style={{ width: "18rem", backgroundColor: "#1e1e1e", color: "white" }}>
//                     <img 
//                         className="card-img-top" 
//                         src="https://via.placeholder.com/286x180?text=Project+3" 
//                         alt="Task Manager Project" 
//                     />
//                     <div className="card-body">
//                         <h5 className="card-title">Task Manager</h5>
//                         <p className="card-text">Productivity app with drag-and-drop functionality and team collaboration features.</p>
//                         <a className="btn btn-primary" href="https://github.com/yourusername/taskmanager">
//                             View Project
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Projects;

import React from "react"

function Projects(){
    return(
        <div className="parent">

        <h1 className="offset-4 mt-5" >welcome on projects</h1>

        <div  className="d-flex flex-column align-items-center justify-content-center parent-child" >
            
        <div className="card cards mt-3 " >
            <img className="card-img-top" src="" alt="" />

            <div className="card-body ">
 <h5 className="card-title">wanderlust</h5>
            <p className="card-text" >A travel booking application with real-time availability and seamless user experience</p>
            <a  className="card-btn" href="">View Project</a>
            </div>
           
</div>


  <div className="card cards  mt-3" >
            <img className="card-img-top" src="" alt="" />
            <div className="card-body">
 <h5 className="card-title">wanderlust</h5>
            <p className="card-text" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nulla adipisci repudiandae architecto eaque ducimus neque dolore, doloribus omnis nemo!</p>
            <a  className="card-btn" href="">View Project</a>
            </div>
           
</div>



  <div className="card cards mt-3 " >
            <img className="card-img-top" src="" alt="" />
            <div className="card-body">
 <h5 className="card-title">wanderlust</h5>
            <p className="card-text" ></p>
            <a  className="card-btn" href="">View Project</a>
            </div>
           
</div>
        </div>
        </div>
    )
}

export default Projects;
// import React from "react"

// function About(){
//     return(
//         <div className="d-flex align-items-center justify-content-around vh-100">
//             <div className="img-container">
//                 <img className="rounded img mt-5 mx-auto d-block" src="./images/its_me.jpg" alt="" />
//             </div>
            
//             {/* Vertical separation line with red color */}
//             <div className="vr mx-4 d-none d-md-block border-danger shadow"></div>
    
//             <div className="about-parent">
//                 <div>
//                     <h1>About Me</h1>
//                     <hr className="my-3" />
//                 </div>
//                 <div>
//                     <h3>Education</h3>
//                     <p>Pursuing B-tech In Computer Engineering from G.H raisoni College Of Enginnering And Management pune</p>
//                     <hr className="my-3" />
//                 </div>
//                 <div>
//                     <h3>Tech Ethusiast</h3>
//                     <p>I'm a passionate Full Stack Web Developer with experience in building dynamic and responsive web applications using the MERN stack</p>
//                     <p>(MongoDB, Express.js, React.js, and Node.js). I enjoy turning ideas into functional and user-friendly digital solutions.</p>
//                     <p>More Intrested In backend Development</p>
//                     <p>Learning AI And ML</p>
//                     <hr className="my-3" />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default About;

import React from "react"

function About(){
    return(
        <div className="d-flex align-items-center justify-content-around vh-100 ">
            <div className="img-container">
                <img className="rounded img mt-5  mx-auto d-block " src="./images/its_me.jpg" alt="" />
            </div>
    
        <div className="about-parent" >
        <div>
            <h1>About Me</h1>
        </div>
        <div>
            <h3>Education</h3>
            <p> Pursuing B-tech In Computer Engineering  from G.H raisoni College Of Enginnering And Management pune</p>
        </div>
         <div>
        <h3>Tech Ethusiast</h3>
        <p>I’m a passionate Full Stack Web Developer with experience in building dynamic and responsive web applications using the MERN stack </p>
        <p>(MongoDB, Express.js, React.js, and Node.js). I enjoy turning ideas into functional and user-friendly digital solutions.</p>
        <p>More Intrested In backend Development</p>
        <p>Learning AI And ML</p>

        </div>
       

        </div>

        </div>
        
    )
}

export default About;
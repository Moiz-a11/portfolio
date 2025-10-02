





import React from "react"

function About(){
    return(
        <div className="d-flex align-items-center justify-content-around vh-100 ">
            <div className="img-container">
                <img className="rounded img mt-5  mx-auto d-block " src="./images/its_me.jpg" alt="" />
            </div>
    
        <div className="about-parent" >
        <div><h1>About Me</h1>
        </div>
        <div>
            <h3>Education</h3>
            <p> Pursuing B-tech In Computer Engineering  from G.H raisoni College Of Enginnering And Management pune</p>
        </div>
         <div>
        <h3>Tech Ethusiast</h3>
        <p>Mearn  Stack Developer </p>
        <p>More Intrested In backend Development</p>
        <p>Learning AI And ML</p>

        </div>
       

        </div>
        </div>
    )
}

export default About;
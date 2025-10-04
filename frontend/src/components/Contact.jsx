import '@fortawesome/fontawesome-free/css/all.min.css';


import React from "react"

function Contact(){

    return(

        <div className="contact-container d-flex  align-items-center justify-content-center " >

            <div className=" card d-flex flex-column align-items-center justify-content-center">

                <h2 >Reach Me</h2>
                <p className="card-text" >email : moeez4286@gmail.com</p>
                <i class="fa-solid fa-phone"></i>
                <p>phone: 96xxxxxxxx</p>
                <i class="fa-solid fa-location-dot"></i>
                <p>Location : Pune,Maharashtra</p>
            </div>

              <div className=" card d-flex flex-column align-items-center justify-content-center">

                <h2 >Drop Massege  </h2>
               
               <input type="text" placeholder="name" />
            <input  type="email" placeholder="email" />
               <input type="text" placeholder="massege" />
               
            </div>

              <div className=" card d-flex flex-column align-items-center justify-content-center">

                <h2 >Follow Me On</h2>
                <h3><i class="fa-brands fa-square-linkedin"></i> </h3>
                <p>LinkedIn</p>
               <h3> <i class="fa-brands fa-x-twitter"></i></h3>
                <p>Twitter</p>
                <h3><i class="fa-brands fa-square-facebook"></i></h3>
                <p>facebook</p>
            </div>
        </div>
    )
}

export default Contact;
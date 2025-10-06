import '@fortawesome/fontawesome-free/css/all.min.css';


import React from "react"

function Contact(){

    return(

        <div className="contact-container d-flex  align-items-center justify-content-center " >

            <div className=" card d-flex flex-column align-items-center justify-content-center socials ">
               {/* Reach Me */}
                <h2  style={{fontFamily: '"Akaya Kanadaka", system-ui', fontWeight: 400}} >Reach Me</h2>
                <p  style={{fontFamily: '"Akaya Kanadaka", system-ui', fontWeight: 400}} className="card-text" >email : moeez4286@gmail.com</p>

                <div className='contact-child  d-flex justify-content-center align-items-center' >
   <i class="fa-solid fa-phone"></i>
                <p  style={{fontFamily: '"Akaya Kanadaka", system-ui', fontWeight: 400}}>phone: 96xxxxxxxx</p>
                </div>

                <div className='  contact-child  d-flex justify-content-center align-items-center'>
                    <i class="fa-solid fa-location-dot"></i>
                <p  style={{fontFamily: '"Akaya Kanadaka", system-ui', fontWeight: 400}}>Location : Pune,Maharashtra</p>
                </div>
             
                
            </div>

              <div  className=" drop-msg-container card d-flex flex-column align-items-center justify-content-center socials ">
                        {/* Drop Massege */}
                <h2  style={{fontFamily: '"Akaya Kanadaka", system-ui', fontWeight: 400}} >Drop Massege  </h2>
               <label className="mb-2" htmlFor="">name :</label>
               <input  type="text" placeholder="name" /> <br />     
                              <label className="mb-2" htmlFor="">email ;</label>

            <input className="mb-2"  type="email" placeholder="email" />

                           <label className="mb-2"  htmlFor="">Message</label>

             <textarea  rows="4" cols="30" name="" id=""></textarea>
               
            </div>

            {/* socials */}

              <div  className=" card d-flex flex-column align-items-center justify-content-center socials ">

                <h2  style={{fontFamily: '"Akaya Kanadaka", system-ui', fontWeight: 400}}>Follow Me On</h2>
                <div className='socials-child d-flex flex-column align-items-center justify-content-center' >
 <h3><i class="fa-brands fa-square-linkedin"></i> </h3>
                  <a href="https://www.linkedin.com/in/moiz-shaikh-999a03322/">LinkedIn</a>
                </div>

                 <div className='socials-child d-flex flex-column align-items-center justify-content-center' >
                     <h3> <i class="fa-brands fa-x-twitter"></i></h3>
             <a href="https://x.com/ShaikhMoee56644">Twitter</a>
                     </div>
              
                <div className='socials-child d-flex flex-column align-items-center justify-content-center' >
                    <h3><i class="fa-brands fa-square-facebook"></i></h3>
           <a href="https://www.facebook.com/profile.php?id=100075693296269">Facebook</a>
                </div>
                
            </div>
        </div>
    )
}

export default Contact;
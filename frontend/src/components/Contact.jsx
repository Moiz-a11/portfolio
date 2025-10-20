import "@fortawesome/fontawesome-free/css/all.min.css";
import {useForm} from "react-hook-form"
import React from "react";
import "./Contact.css";
function Contact() {
   const {register , handleSubmit, formState :{errors,isSubmitting}} =  useForm();


   const handleForm =async(e)=>{
    
try{

} catch(error){

}

   }
   
  return (
    
    <>
   

      <div className="contact-container d-flex  align-items-center justify-content-center ">
        <div className=" card d-flex flex-column align-items-center justify-content-center socials ">
          {/* Reach Me */}
          <h2
            style={{
              fontFamily: '"Akaya Kanadaka", system-ui',
              fontWeight: 400,
            }}
          >
            Reach Me
          </h2>
          <p
            style={{
              fontFamily: '"Akaya Kanadaka", system-ui',
              fontWeight: 400,
            }}
            className="card-text"
          >
            email : moeez4286@gmail.com
          </p>

          <div className="contact-child  d-flex justify-content-center align-items-center">
            <i class="fa-solid fa-phone"></i>
            <p
              style={{
                fontFamily: '"Akaya Kanadaka", system-ui',
                fontWeight: 400,
              }}
            >
              phone: 96xxxxxxxx
            </p>
          </div>

          <div className="  contact-child  d-flex justify-content-center align-items-center">
            <i class="fa-solid fa-location-dot"></i>
            <p
              style={{
                fontFamily: '"Akaya Kanadaka", system-ui',
                fontWeight: 400,
              }}
            >
              Location : Pune,Maharashtra
            </p>
          </div>
        </div>

        {/* socials */}

        <div className=" card d-flex flex-column align-items-center justify-content-center socials ">
          <h2
            style={{
              fontFamily: '"Akaya Kanadaka", system-ui',
              fontWeight: 400,
            }}
          >
            Follow Me On
          </h2>
          <div className="socials-child d-flex flex-column align-items-center justify-content-center">
            <h3>
              <i class="fa-brands fa-square-linkedin"></i>{" "}
            </h3>
            <a href="https://www.linkedin.com/in/moiz-shaikh-999a03322/">
              LinkedIn
            </a>
          </div>

          <div className="socials-child d-flex flex-column align-items-center justify-content-center">
            <h3>
              {" "}
              <i class="fa-brands fa-x-twitter"></i>
            </h3>
            <a href="https://x.com/ShaikhMoee56644">Twitter</a>
          </div>

          <div className="socials-child d-flex flex-column align-items-center justify-content-center">
            <h3>
              <i class="fa-brands fa-square-facebook"></i>
            </h3>
            <a href="https://www.facebook.com/profile.php?id=100075693296269">
              Facebook
            </a>
          </div>
        </div>
      </div>

      
        <h2 className="form-title  msg-title ">Drop Massege </h2>

        {/*   Drop Massege container  */}
        

        <div className="drop-msg-container d-flex flex-column align-items-center justify-content-center offset-4">

          <form onSubmit={handleSubmit} action="">

          <div className="lable-input-container d-flex flex-column align-items-center justify-content-center">

            <label className="mb-2 ms-2 form-label " htmlFor="name">
              Name
            </label>
            <input  type="text" value={name} placeholder="name" />
          </div>

          <div className="lable-input-container   d-flex flex-column align-items-center justify-content-center ">
            <label className="mb-2 mt-5 form-label" htmlFor="email">
              Email
            </label>
            <br />
            <input
            
              className="mb-2"
              type="email"
              placeholder="email"
              value={email}
            />
          </div>

           <div className="lable-input-container   d-flex flex-column align-items-center justify-content-center mt-5 ">
            <label className="mb-2 mt-5 form-label" htmlFor="email">
              Subject
            </label>
            <br />

            <input
              className="mb-2"
              type="text"
              placeholder="Subject"
              value={subject}
            />
          </div>

          <div className="msg-area mt-5">
            <label className="mb-2" htmlFor="msg">
              Message
            </label>{" "}
            <br />
            <textarea
              placeholder="your message......"
              name="message"
              rows="8"
              cols="50"   
              value={message}
            ></textarea>
            
          </div>

          </form>

        </div>

        <button className="btn  btn-primary offset-5 mt-3">Send Massege</button>
      
    </>
  );
}

export default Contact;


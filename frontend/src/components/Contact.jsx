import "@fortawesome/fontawesome-free/css/all.min.css";
import {useForm} from "react-hook-form"
import React from "react";
import "./Contact.css";
function Contact() {
   const {register , handleSubmit, formState :{errors,isSubmitting}} =  useForm();
   
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

      <form action="">
        <h2 className="form-title  msg-title ">Drop Massege </h2>

        {/*   Drop Massege container  */}

        <div className="drop-msg-container d-flex flex-column align-items-center justify-content-center offset-4">
          <div className="lable-input-container d-flex flex-column align-items-center justify-content-center">
            <label className="mb-2 ms-2 form-label " htmlFor="name">
              Name
            </label>
            <input name="name" type="text" placeholder="name" />
          </div>

          <div className="lable-input-container   d-flex flex-column align-items-center justify-content-center ">
            <label className="mb-2 mt-5 form-label" htmlFor="email">
              Email
            </label>
            <br />
            <input
              name="email"
              className="mb-2"
              type="email"
              placeholder="email"
            />
          </div>

          <div className="msg-area mt-5">
            <label className="mb-2" htmlFor="msg">
              Message
            </label>{" "}
            <br />
            <textarea
              placeholder="your message......"
              name="msg"
              rows="8"
              cols="50"
            ></textarea>
          </div>
        </div>

        <button className="btn  btn-primary offset-5 mt-3">Send Massege</button>
      </form>
    </>
  );
}

export default Contact;

// import { useState } from 'react';
// import './Contact.css';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you would typically send the data to your backend
//     console.log('Form submitted:', formData);
//     setIsSubmitted(true);

//     // Reset form after 3 seconds
//     setTimeout(() => {
//       setIsSubmitted(false);
//       setFormData({ name: '', email: '', message: '' });
//     }, 3000);
//   };

//   return (
//     <div className="contact-container">
//       <div className="drop-msg-container card d-flex flex-column align-items-center justify-content-center">
//         <h2 className="form-title">Drop a Message</h2>

//         {isSubmitted ? (
//           <div className="success-message">
//             <div className="success-icon">✓</div>
//             <p>Thank you! Your message has been sent successfully.</p>
//           </div>
//         ) : (
//           <form onSubmit={handleSubmit} className="contact-form w-100">
//             <div className="form-group">
//               <label className="form-label" htmlFor="name">Name:</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 className="form-control"
//                 placeholder="Your name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label className="form-label" htmlFor="email">Email:</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="form-control"
//                 placeholder="Your email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label className="form-label" htmlFor="message">Message:</label>
//               <textarea
//                 id="message"
//                 name="message"
//                 className="form-control"
//                 rows="4"
//                 placeholder="Your message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//               ></textarea>
//             </div>

//             <div className="text-center mt-3">
//               <button type="submit" className="submit-btn">Send Message</button>
//             </div>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Contact;

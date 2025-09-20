import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
// Replace the SVG code below with the actual SVG content for each icon


const ContactUs = () => (
    <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8 contact-section">
        <div className="container mx-auto">
<div className="contact-header">
      <badge className="badge-blue mb-2 m-auto" >
Contact Us                </badge>
      <h3>
        Get in touch with <br />
        acework now today
      </h3>
      <p>
        We'd love to hear from you! Whether you have questions, feedback or need <br/> support, our team is here to help.
      </p>
      <span className="follow-us">Follow us on:</span>
            <div className="social-links">
        
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
        <a href="#">Twitter</a>
        <a href="#">Pinterest</a>
      </div>
    </div>
    <div className="contact-panels">
        <div className="row justify-content-center">
            <div className="col-md-5">
 <div className="contact-left-panel">
     <Image src="/assets/services/top-img.svg" className="top-img"  width={386} height={283} alt="">
                          </Image>
                          <Image src="/assets/services/bottom-img.svg" className="bottom-img"  width={386} height={283} alt="">
                          </Image>
        <h3>
          Have a Concept in Mind?<br/>
          Don't Hesitate to Contact with Us!
        </h3>
        <div className="panel-graphic text-center">
           <Image src="/assets/contact.png" className="m-auto"  width={386} height={283} alt="">
                          </Image>
                     <p>
          Let’s transform your vision into reality with our expert digital solutions and development services.
        </p>     
        </div>
        
      </div>
            </div>
     <div className="col-md-6">
<form className="contact-form" autoComplete="off">
    <div >
<label>
          Full Name
        </label>
        <div className="input-icon-wrapper">
            <img src="assets/services/user.svg" alt="Full Name Icon" className="input-icon-img" />
      <input type="text" name="fullname" placeholder="FULL NAME" required />
    </div>
    </div>
     <div >
<label>
          Email
        </label>
        <div className="input-icon-wrapper">
            <img src="assets/services/email.svg" alt="Full Name Icon" className="input-icon-img" />
          <input type="email" name="email" placeholder="your@email.com" required />
    </div>
    </div>
        <div >
<label>
          Number
        </label>
        <div className="input-icon-wrapper">
            <img src="assets/services/phone.svg" alt="Full Name Icon" className="input-icon-img" />
          <input type="text" name="phone" placeholder="+44 1234 567134" />
    </div>
    </div>
        <div >
<label>
          Additional Info
        </label>
        <div className="input-icon-wrapper">
            <img src="assets/services/pencil.svg" alt="Full Name Icon" className="input-icon-img" />
          <textarea name="info" placeholder="Additional info that you may want to add..." >

          </textarea>
    </div>
    </div>
        
        <button type="submit" class="btn btn-orange  w-100">
          Subscribe
        </button>
      </form>
     </div>
      
    </div>
        </div>
  
    </div>
  </section>
);

export default ContactUs;

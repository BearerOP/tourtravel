import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import { IonIcon } from '@ionic/react';
import { logoTwitter, logoFacebook, logoInstagram, logoLinkedin, logoYoutube } from 'ionicons/icons';

const Contact = () => {
  return (
    <>
      <div className="contact-background">
        <div className="contact-nav">
            <img className="logo" src="/img/logo.png" alt="" />
            <ul>
               <Link to="/">Home</Link>
               <Link to="/support">Support</Link>
            </ul>

        </div>
        <div className="container visible">
        <h1>GET <span>IN TOUCH</span></h1>
            <div className="contact-form">
          <form action="">
            <ul className="form-ul">
              <li>
                <label htmlFor="">Name</label>
                <input type="text" />
              </li>
              <li>
                <label htmlFor="">Email</label>
                <input type="text" />
              </li>
              <li>
                <label htmlFor="">Message</label>
                <input type="text" />
              </li>
              <li>
                <button className="red-btn">SUBMIT</button>
              </li>
            </ul>
          </form>
          <ul className="contact-detail">
                <li>
                    <p>Phone</p>
                    <a href="tel:+8779112732">(+91)8779112732</a>
                </li>
                <li>
                    <p>Email</p>
                    <a href="mailto:360.parminder@gmail.com">360.parminder@gmail.com</a>
                </li>
                <li>
                    <p>Address</p>
                    <a href="">Alwar,Rajasthan,Bharat</a>
                </li>
                <li>
                    <p>Socials</p>
                    <div className="icons">
                    <a href=""><IonIcon icon={logoTwitter} /></a>
                    <a href=""><IonIcon icon={logoLinkedin} /></a>
                    <a href=""><IonIcon icon={logoInstagram} /></a>
                    </div>
                    
                </li>
          </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

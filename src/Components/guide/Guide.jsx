import React, { useEffect } from "react";
import  ReactDOM  from "react-dom";
import "./Guide.css";
import { IonButton, IonContent, IonIcon } from "@ionic/react";
import {
  add,
  close,
  logoAndroid,
  logoApple,
  logoGoogle,
  mail,
  logoTwitter,
  logoFacebook,
  logoInstagram,
  logoLinkedin,
  logoYoutube,
} from "ionicons/icons";
const Guide = ({closePopup}) => {
    useEffect(()=>{
        document.body.style.overflowY="hidden";
        return()=>{
            document.body.style.overflowY="scroll";
        };
    },[]);
  return ReactDOM.createPortal(
    <>
      <div className="guide-maincontainer" onClick={closePopup}></div>
        <div className="guide-container">
          <div className="guide-top flex">
            <h2>Login</h2>{" "}
            <button onClick={closePopup} className="close-btn">
              <IonIcon icon={close} />
            </button>
          </div>
          <h2>Welcome to TravelBuddy</h2>
          <div className="phone flex">
            <input type="tel" name="" placeholder="Phone Number" id="" />
            <p>
              We'll call or text you to confirm your number. Standard message
              and data rates apply.
            </p>
            <button className="">Continue</button>
          </div>
          <p>or</p>
          <div className="other flex">
            <button className="border-btn">
              <IonIcon className="facebook" icon={logoFacebook} />
              Continue with Facebook
            </button>
            <button className="border-btn">
              <IonIcon className=" google" icon={logoGoogle} />
              Continue with Google
            </button>
            <button className="border-btn ">
              <IonIcon className="apple" icon={logoApple} />
              Continue with Apple
            </button>
            <button className="border-btn ">
              <IonIcon className="mail" icon={mail} />
              Continue with email
            </button>
          </div>
        </div>
      
    </>,
    document.querySelector(".login")
  );
};
export default Guide;

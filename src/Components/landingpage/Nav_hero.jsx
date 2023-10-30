import React, { useState } from "react";
import "./Nav_hero.css";
import { Link } from "react-router-dom";
import Guide from "/Users/storm/Downloads/vscode/tour/src/Components/guide/Guide.jsx"
const Nav_hero = () => {
const [popup,setPopup] = useState(false);

const closePopup=()=>setPopup(false);


  return (
    <>
   
      <div className="background">
        <div className="container ">
          <div className="navbar">
            <img className="logo" src="/img/logo.png" alt="" />
            <ul className="nav-links">
              <Link to="/explore">Explore</Link>
              <Link to="/discover">Discover</Link>
              <Link to="/tourpackage">Tour package</Link>
              <Link to="/contact">Contact us</Link>
            </ul>
            <ul className="nav-btns">
             <button className="secondary-btn" onClick={()=>setPopup("true")}>Guide</button>
             {popup && <Guide closePopup={closePopup} />}
              <Link to='/tourist' className="primary-btn">
                Tourist
              </Link>
            </ul>
          </div>
          <div className="hero">
            <p className="hero-head">Enjoy the Tour</p>
            <h2>Discover the Beautiful Bharat</h2>
            <p className="hero-text">
              To get the best of your adventure you just need to leave your
              house and go where you like. We are waiting for you. Let's make
              your best trip ever.
            </p>
            <ul className="hero-btns">
              <button className="primary-btn">Find out more</button>
              <button className="secondary-btn"> Play Demo</button>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Nav_hero;

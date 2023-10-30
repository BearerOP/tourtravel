import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./Components/Home";
import Tourist from "./Components/tourist/tourist";
import Guide from "./Components/guide/Guide";
import Contact from "./Components/Contactus/Contact";
import Explore from "./Components/Explore/Explore";
import Discover from "./Components/Discover/Discover";
import Support from "./Components/Support/Support"

const App=()=>{
  return(
    <>
    <Routes>
      
      <Route path="/" element={<Home/>}/>
      <Route path="/tourist" element={<Tourist /> } />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/support" element={<Support />} />

      
    </Routes>
    
    </>
  )
}

export default App;

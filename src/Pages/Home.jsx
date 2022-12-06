import "../App.css"
import Navbar from "../Components/Navbar";
import { createContext } from "react";
import { useState } from "react";
//  
import HomeMiddle from "../Components/Homemiddle"


function Home() {

  return (
    <div className="body">
      <Navbar/>
      <HomeMiddle/>
    </div>

  );
}

export default Home;

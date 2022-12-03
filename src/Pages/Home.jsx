import React from "react";
import pic from "../Parts/pic.jpeg"
import Navbar from "../Components/Navbar"
import Homebody from "../Components/Homebody"
import axios from "axios"




function Home() {
    return (
      <div className="body">
       <Navbar/>
      <Homebody/>
         
      </div>
    );
  }


  export default Home
  
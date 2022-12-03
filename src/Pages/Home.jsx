import React from "react";
import pic from "../Parts/pic.jpeg"
import Sidebar from "../Components/Sidebar"
import Homebody from "../Components/Homebody"
import axios from "axios"




function Home() {
    return (
      <div className="body">
       <Sidebar/>
      <Homebody/>
         
      </div>
    );
  }


  export default Home
  
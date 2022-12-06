import React from "react";
import Navbar from "../Components/Navbar"
import ProfileMid from "./ProfileMid"


function Profile(){
    return(
        <div className="profile">
            <Navbar/>
            <ProfileMid/>
        </div>
    )
}

export default Profile
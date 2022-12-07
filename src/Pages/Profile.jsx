import React from "react";
import Navbar from "../Components/Navbar"
import ProfileMid from "../Components/ProfileMid"


function Profile(){
    return(
        <div className="profile">
            <Navbar/>
            <ProfileMid/>
        </div>
    )
}

export default Profile
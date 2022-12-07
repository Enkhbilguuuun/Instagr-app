import React from "react";


function ProfileMid(){
    return(
        <div className="midbody">
            <div className="profmain">
                <div className="segment3">
                    <img style={{
                        width:"150px",
                        height:"150px",
                        borderRadius:"50%",
                        backgroundColor:"beige",
                        marginLeft:"40px",
                        marginTop:"30px"
                    }} src="" alt="" />
                    <div className="profprops">
                        <div className="name">EnkhBarsTemChing 
                            <button className="">edit profile</button>
                            <img style={{
                                height:"15px",
                                width:"15px",
                                backgroundColor:"green"

                            }} src="" alt="" />
                        </div>
                    </div>
                </div>
                <div className="segment4"></div>
            </div>
        </div>
    )
}

export default ProfileMid
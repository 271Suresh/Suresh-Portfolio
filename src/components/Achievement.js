import React from 'react'
import pic from "../pic1.png";

export const Achievement = () => {
    return (
        <div id="achieve" className="about-wraper">
            <div className="info">
                <h1 className="title">Achievement</h1>
                <img className="pic" src={pic} alt="pic.."/>
            </div>
        </div>
    )
}

export default Achievement
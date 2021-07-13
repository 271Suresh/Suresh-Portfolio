import React from 'react'
import pic from "../pic1.png";

export const Skills = () => {
    return (
        <div id="skills" className="about-wraper">
            <div className="info">
                <h1 className="title">Skills</h1>
                <img className="pic" src={pic} alt="pic.."/>
            </div>
        </div>
    )
}

export default Skills
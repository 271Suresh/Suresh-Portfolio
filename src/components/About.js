import React from 'react'
import pic from "../pic1.png";
import pic2 from "../pic2.png";

export const About = () => {
    return (
        <div id="about" className="about-wraper">
            <h1 className="title">About</h1>
            <div className="about-info">
                <img className="pic" src={pic2} alt="pic.."/>
                {/* <h1 className="home__title">Hi,<br/>I'am <span className="home__title-color">Suresh</span><br/> I love Experimenting with web</h1> */}
                {/* <img className="pic" src={pic} alt="pic.."/> */}
                <h3 className="about-intro-heading">I'am Suresh Suthar<h5 className="about-para">I love to design and develop web and mobile based application. Right now i m pursuing MCA(Master Of Computer Application) degree in Computer Science from MIT World Peace University. My portfolio is a representation of all that I've learned and
                accomplished as a computer science student. </h5></h3>
                
            </div>
        </div>
    )
}

export default About;
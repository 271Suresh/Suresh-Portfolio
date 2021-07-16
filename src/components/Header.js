import React from "react"
import Typed from "react-typed";
// import pic from "../pic1.png";

const Header = () => {
    return (
        <div id="header" className="header-wraper">
            <div className="main-info">
                {/* <h1 className="home__title">Hi,<br/>I'am <span className="home__title-color">Suresh</span><br/> Programmer</h1>
                <img className="pic" src={pic} alt="pic.."/> */}
                <h1>Hi, I am</h1>
                <Typed
                    className="typed-text"
                    strings={["SURESH", "SUTHAR"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <br/>
                <h1>I love Experimenting with web</h1>
                
            </div>
        </div>
        
    )
}

export default Header;

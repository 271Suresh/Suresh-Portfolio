import React from "react"
import Typed from "react-typed";
// import pic from "../pic1.png";

const Header = () => {
    return (
        <div id="header" className="header-wraper">
            <div className="main-info">
                {/* <h1 className="home__title">Hi,<br/>I'am <span className="home__title-color">Suresh</span><br/> Programmer</h1>
                <img className="pic" src={pic} alt="pic.."/> */}
                <h1>Hi, I am </h1>
                <Typed
                    className="typed-text"
                    strings={["Suresh", "Suthar"]}
                    typeSpeed={60}
                    backSpeed={60}
                    loop
                />
                <br/>
                <h1>Welcome to my Portfolio</h1>
                {/* <a href="#" class="button">Contact</a> */}
                
            </div>
        </div>
        
    )
}

export default Header

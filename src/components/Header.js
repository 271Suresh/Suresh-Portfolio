import React from "react"
// import pic from "../pic1.png";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                {/* <h1 className="home__title">Hi,<br/>I'am <span className="home__title-color">Suresh</span><br/> Programmer</h1>
                <img className="pic" src={pic} alt="pic.."/> */}
                <h1>Hi,<br/>I'am Suresh Welcome to my Portfolio</h1>
                <Typed
                    className="typed-text"
                    strings={["Web Designer", "Web Developer", "Programmer"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <br/>
                <a href="#" class="button">Contact</a>
            </div>
        </div>
    )
}

export default Header

import React from "react"
//React FontAwesome 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
    return (
      <>
      <header className="mobileNav">
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container">
            <a className="navbar-brand" href="#">Suresh</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <FontAwesomeIcon icon ={faBars} style={{color: "#000000"}}/>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#header">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">About</a>
                </li>
                
                <li className="nav-item">
                  <a className="nav-link" href="#portfolio">Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#skills">Skills</a>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link" href="#">Experience</a>
                </li> */}
                {/* <li className="nav-item">
                  <a className="nav-link" href="#achieve">Achievement</a>
                </li> */}
                <li className="nav-item">
                  <a className="nav-link" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      </>
    )
}

export default Navbar;
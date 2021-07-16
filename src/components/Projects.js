import React from 'react'
import motor from "../motor.png"
import foodie from "../foodie.png"
import flight from "../flight.png"
import th from "../LOGO2.png"

export const Projects = () => {
    return (
        <React.Fragment>
          <div id="portfolio" className="container">
            <div className="info">
              <div className="row">
              <h1 className="title">Projects</h1>
                <div className="col-sm">
                  <div className="card">
                  <div className="overflow">
                    <img src={motor} className="card-img-top" alt="..."/></div>
                    <div className="card-body">
                      <h5 className="card-title">Motor - Aid</h5>
                      <p className="card-text">Vehicle Emergency Service System</p>
                      <a target="_blank" href="https://github.com/271Suresh/Motor-Aid-Vehicle-Emergency-Service" className="card-button">View</a>
                    </div>
                  </div>
                </div>
                <div className="col-sm">
                  <div className="card">
                  <div className="overflow">
                    <img src={foodie} className="card-img-top" alt="..."/></div>
                    <div className="card-body">
                      <h5 className="card-title">Foodie</h5>
                      <p className="card-text">A Food Delivery System</p>
                      <a target="_blank" href="https://github.com/271Suresh/Foodie" className="card-button">View</a>
                    </div>
                  </div>
                </div>
                <div className="col-sm">
                  <div className="card">
                  <div className="overflow">
                    <img src={th} className="card-img-top" alt="..."/></div>
                    <div className="card-body">
                      <h5 className="card-title">The Tech Hub</h5>
                      <p className="card-text">PC Building System</p>
                      <a target="_blank" href="https://github.com/271Suresh/TheTechHub" className="card-button">View</a>
                    </div>
                  </div>
                </div>
                <div className="col-sm">
                  <div className="card">
                  <div className="overflow">
                    <img src={flight} className="card-img-top" alt="..."/></div>
                    <div className="card-body">
                      <h5 className="card-title">FlyAir</h5>
                      <p className="card-text">Airline Booking System</p>
                      <a target="_blank" href="https://github.com/271Suresh/AirlineBookingSystem" className="card-button">View</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </React.Fragment>
    );
}

export default Projects;
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
                  <div class="card">
                  <div className="overflow">
                    <img src={motor} class="card-img-top" alt="..."/></div>
                    <div class="card-body">
                      <h5 class="card-title">Motor - Aid</h5>
                      <p class="card-text">Vehicle Emergency Service System</p>
                      <a target="_blank" href="https://github.com/271Suresh/Motor-Aid-Vehicle-Emergency-Service" class="card-button">View</a>
                    </div>
                  </div>
                </div>
                <div className="col-sm">
                  <div class="card">
                  <div className="overflow">
                    <img src={foodie} class="card-img-top" alt="..."/></div>
                    <div class="card-body">
                      <h5 class="card-title">Foodie</h5>
                      <p class="card-text">A Food Delivery System</p>
                      <a target="_blank" href="https://github.com/271Suresh/Foodie" class="card-button">View</a>
                    </div>
                  </div>
                </div>
                <div className="col-sm">
                  <div class="card">
                  <div className="overflow">
                    <img src={th} class="card-img-top" alt="..."/></div>
                    <div class="card-body">
                      <h5 class="card-title">The Tech Hub</h5>
                      <p class="card-text">PC Building System</p>
                      <a target="_blank" href="https://github.com/271Suresh/TheTechHub" class="card-button">View</a>
                    </div>
                  </div>
                </div>
                <div className="col-sm">
                  <div class="card">
                  <div className="overflow">
                    <img src={flight} class="card-img-top" alt="..."/></div>
                    <div class="card-body">
                      <h5 class="card-title">FlyAir</h5>
                      <p class="card-text">Airline Booking System</p>
                      <a target="_blank" href="https://github.com/271Suresh/AirlineBookingSystem" class="card-button">View</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="constainer">
            <div className="info">
              <div class="row">
              <h1 className="title">Portfolio</h1>
                <div class="col-sm">
                  <div class="card">
                  <div className="overflow">
                    <img class="card-img-top" src={img20} alt="Card image cap"/></div>
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
                <div class="col-sm">
                  <div class="card">
                  <div className="overflow">
                    <img class="card-img-top" src={img21} alt="Card image cap"/></div>
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </React.Fragment>
    );
}

export default Projects
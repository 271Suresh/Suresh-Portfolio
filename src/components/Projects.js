import React from 'react'
import img20 from "../img20.jpg"
import img21 from "../img21.jpg"
import img22 from "../img22.jpg"

export const Projects = () => {
    return (
        <React.Fragment>
          <div id="portfolio" className="container">
            <div className="info">
              <div className="row">
              <h1 className="title">Portfolio</h1>
                <div className="col-sm">
                  <div class="card">
                  <div className="overflow">
                    <img src={img20} class="card-img-top" alt="..."/></div>
                    <div class="card-body">
                      <h5 class="card-title">First Project</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="card-button">Go somewhere</a>
                    </div>
                  </div>
                </div>
                <div className="col-sm">
                  <div class="card">
                  <div className="overflow">
                    <img src={img21} class="card-img-top" alt="..."/></div>
                    <div class="card-body">
                      <h5 class="card-title">Sceond Project</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="card-button">Go somewhere</a>
                    </div>
                  </div>
                </div>
                <div className="col-sm">
                  <div class="card">
                  <div className="overflow">
                    <img src={img22} class="card-img-top" alt="..."/></div>
                    <div class="card-body">
                      <h5 class="card-title">Third Project</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="card-button">Go somewhere</a>
                    </div>
                  </div>
                </div>
                <div className="col-sm">
                  <div class="card">
                  <div className="overflow">
                    <img src={img22} class="card-img-top" alt="..."/></div>
                    <div class="card-body">
                      <h5 class="card-title">Third Project</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="card-button">Go somewhere</a>
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
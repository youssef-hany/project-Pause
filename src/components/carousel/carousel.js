import React, { Component } from 'react';
import './carousel.css'
import picture1 from '../img/bookshelf349946_1280.jpg';
import picture2 from '../img/camera349948_1280.jpg';
import picture3 from '../img/purse407176_1280.jpg';


class MainCarousel extends Component {
      
      render(){
            return (
            
              <div id="mainCarousel" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                      <div className="carousel-item active">
                          <img src={ picture1 } className="w-100" alt="First"></img>
												                          

											
                      </div>
                      <div className="carousel-item">
                          <img src={ picture2 } className="d-block w-100" alt="Second"></img>
                      </div>
                      <div className="carousel-item">
                        <img src={ picture3 } className="d-block w-100" alt="Third"></img>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5></h5>
                                    <p></p>
                                </div>
                        
                      </div>
                                
                     
                  </div>
                  <a className="carousel-control-prev" href="#mainCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#mainCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
            
            );
      
      }
}
export default MainCarousel;
import React, { Component } from 'react';
import './sections.css';
import Xmark from "../img/x-mark.png";
import bueLogo from "../img/bueLogo.png";
import Pause1 from "../img/Pause1.jpg";
import PauseSign from "../img/PauseSign.png";
import BoxMark from "../img/boxman2.jpg";


class Sections extends Component {
  render(){
    return(
    
      <div className="Sections">
      
          <div className="sectionDark">
            <div className="row">
                <div className="col-sm-12 col-md-3 offset-md-1 buelogo">
                  <img src={ bueLogo } className="img-fluid logos"></img>
                  
                  
                </div>
                <div className="col-sm-12 col-md-6">
                    <div className="row">
                        <div className="col-sm-12">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                         <button type="button" className="btn moreBtn btnTxt btn-sm btnCenter">Read More</button>
                        </div>
                    </div>
                    <div className="row secondTxt">
                        <div className="col-sm-8">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborium.</div>
                        <div className="col-sm-4"><img src={ Pause1 } className="img-fluid Pause1"></img></div>
                    </div>
                </div>
                <div className="col"></div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="btn-wrapper">
                        <button type="button" className="btn btn-lg moreBtn joinM" data-toggle="modal" data-target="#joinModal">Join Community</button>
                    </div>
                </div>
            </div>
        </div>
      <div className="sectionLight">
            <div className="row">
                <div className="col-sm-12">
                    <div className="row">
                        <div className="col-sm-12 col-lg-4">
												
                            <img src={ BoxMark } className="img-fluid imgCenter"></img>
									
                            <div className="btn-cont row">

                                <div className="col-sm-12">
                                    <button type="button" className="btn moreBtn btn-lg btnCenter" data-toggle="modal" data-target=".first-modal-xl">Read More</button>
                                </div>

                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-4">
                          
														<img src={ BoxMark } className="img-fluid imgCenter"></img>
													
													
                            <div className="row">
                                <div className="col-sm-12">
                                    <button type="button" className="btn moreBtn btn-lg btnCenter" data-toggle="modal" data-target=".second-modal-lg">Read More</button>
                                </div>

                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-4">
                            <img src={ BoxMark } className="img-fluid imgCenter"></img>
                            <div className="row">
                                <div className="col-sm-12">
                                    <button type="button" className="btn moreBtn btn-lg btnCenter" data-toggle="modal" data-target=".third-modal-md">Read More</button>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
      </div>
      </div>
   
    
    
    );
    
    
  }
  
  
  
}
export default Sections;
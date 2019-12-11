import React, { Component } from 'react';
import './footer.css';
import Pause from "../img/Pause1.jpg";
import facebook from '../img/facebook.png';
import twitter from '../img/twitter.png';
import instagram from '../img/instagram.png';
import Xmark from "../img/x-mark.png";

class Footer extends Component {
	
	constructor(props){
		super();
		

	}
	
	componentDidMount() {
  window.scrollTo(0, 0)
}
  render(){
    return(
      <footer className="footer1">
        <div className="row">
        <div className="col-sm-4">
          <div className="container socialMedia">

          <div className="col-1 social-fb">
            <a target="_blank" href="https://facebook.com/PauseClub/">
            <img src={facebook} className="facebook"></img> 
            </a>
            </div>
         

          <div className="col-1 social-tw">
            <a target="_blank" href="http://twitter.com/">
            <img src={twitter} className="twitter"></img> 
            </a>
            </div>
        
         
          <div className="col-1 social-in">
            <a target="_blank" href="https://instagram.com/pause.bue/">
            <img src={instagram} className="instagram"></img> 
            </a>
            </div>
         

          </div>
				

					
					</div>
           <div className="col-sm-4">
						 <a className="footerimg" href="#">
						 <img id="footerImg" src= { Pause } className="img-fluid Pause"></img>
						 </a>
           
          </div>
        <div className="col-sm-4"></div>
       
        </div>
       
        <div className="container-fluid footcont">
         
      
            <div className="row">
              
              
                <div className="col-3 footercol">
                  
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     About
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a className="dropdown-item" href="#">History of Pause</a>
                      <a className="dropdown-item" href="#">Rules and Regulations</a>
                      <a className="dropdown-item" href="#">Family of Pause</a>
                      
                    </div>
                  </div>
                
                </div>
                <div className="col-3 footercol">
                    
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     Perspective
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a className="dropdown-item" href="#">Mission</a>
                      <a className="dropdown-item" href="#">Vision</a>
                      <a className="dropdown-item" href="#">Club Objectives</a>
                      <a className="dropdown-item" href="#">Pause Paradox</a>
                    </div>
                  </div>
                      
                       
                </div>
					
						
							<div className="col-3 footercol">
                  
                    <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     Fields of Activity
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a className="dropdown-item" href="#">Entertainment</a>
                      <a className="dropdown-item" href="#">Fun</a>
                      <a className="dropdown-item" href="#">Exitement</a>
                    </div>
                  </div>
                </div>
                <div className="col-3 footercol">
                
                  
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     Contact Us
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                     
                      <a className="dropdown-item" href="#">Facebook Page</a>
                      <a className="dropdown-item" href="#">Twitter</a>
                      <a className="dropdown-item" href="#">LinkedIn</a>
                      <a className="dropdown-item" href="#">Email</a>
                    </div>
                  </div>
                    
                </div>
							
							
							</div>
							
					
                
            
        
        </div>
        
        
        </footer> 
    
    );
    
    
  }
  
  
  
}
export default Footer;
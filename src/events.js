import React, { Component } from 'react';
import './events.css';
import MainCarousel from './components/carousel/carousel';
import NavBar from './components/navBar/navBar';
import pause from './components/img/PauseIMG.png';
//services

window.scrollTo(0, 0);
class events extends Component{
		
	constructor(props){
    	super(props);
		
		
  }


	
	
	
	render(){
	 	console.log(this.props);

		return(
			
			<div className="Events">
				
			<div className="row">
                   
								<div className="card event">
									<img className="card-img-top" src={pause} alt="Event Picture"></img>
									<div className="card-block">
										<h4 className="card-title">{this.props.name}</h4>
										<p className="card-text">{this.props.number}</p>
										
										
									
									</div>
								
								
								</div>
                    
                    
                  
                                    
                              
                
			</div>
		 
			
			</div>
		);
	
	}
	
	
}
export default events;
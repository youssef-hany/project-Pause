import React,  { ReactDOM, Component } from 'react';
import {Link} from 'react-router-dom';
import './navBar.css';


class NavBar extends Component {
	
	
	constructor(props){
    	super();
			
			this.state = {
				scrolled: false,
			};
  }
	
	
	
	componentDidMount(){
		window.addEventListener('scroll', () =>{
			var stickyContainer = document.getElementById("navbar");
			try{
				var offset = stickyContainer.offsetTop;
			}catch(e){
				console.log('offset Error', e);
			}
		
			const isTop = window.scrollY < offset;
				if(isTop !== true) {
					this.setState({ scrolled: true });
				} else{
					this.setState({ scrolled: false });
				}
		});
	}

	componentWillUnmount(){
		window.removeEventListener('scroll', Component);
	}
      
      render(){
            return (
                  <div id="navbar" className="cardS">
                        <div className="card-block">
                              
                               
                                  <nav  className={this.state.scrolled ? 'navbar navbarS navbar-expand-lg navbar-dark bg-dark scrolled' : 'navbar navbarS navbar-expand-lg navbar-dark bg-dark'}>
																		 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
																			<span className="navbar-toggler-icon"></span>
																		</button>
																		
                                    <div className="collapse navbar-collapse row" id="navbarNavDropdown"> 
																			<div className="col-sm-1"></div>
																			<div className="col-sm-1"></div>
																				<div className="col-sm-10">
																			<ul className="navbar-nav">
																				  <li className="nav-item">
																				 	<Link className="nav-link btn  navbar-brand btn-nav " to="/">Home <span className="sr-only">(current)</span></Link>
																				 </li>
																				<li className="nav-item "><Link className="nav-link btn  navbar-brand btn-nav" to="/events">Events</Link>
																				</li>
																				 
                                      <li className="nav-item"><a className="nav-link btn navbar-brand btn-nav" href="/about">About Us</a>
																			</li>
                                   <li className="nav-item">
																		 <a className="nav-link btn  navbar-brand btn-nav" href="/shop">Pause Shop</a>
																				 </li>
                                       <li className="nav-item"> 
																				 <a className="nav-link btn navbar-brand btn-nav" href="/contact">Contact Us</a></li>
                                     <li className="nav-item">
																				 <a className="nav-link btn navbar-brand btn-nav" href="/register">Registration</a>
																				 </li>
                                      
																			
																			</ul>
																					
																			</div>
                                       
																			
                                    
                                    
                                    </div>
                                  
                                   </nav>
                               
                        </div>
                  
            
                  </div>
            
            );
				
				
      }
	
	
		
      
}
export default NavBar;
import React,  { ReactDOM, Component } from 'react';
import {Link} from 'react-router-dom';
import pause from '../img/PauseName.png';
import jwt from 'jsonwebtoken';
import './navBar.css';
import {isAuthenticated} from '../../account/authenticated'

const secret = 'secret';
const token = localStorage.usertoken;
class NavBar extends Component {
	
	
	constructor(props){
    	super();
			
			this.state = {
				scrolled: false,

			};
		
  }
	
	logOut(e){
		e.preventDefault();
		localStorage.removeItem('usertoken');
		this.props.history.push('/');
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
			const auth = isAuthenticated(token);
	
				
				const loginLink = (	
																				 <Link className="nav-link btn navbar-brand btn-nav" to ="/login">Login</Link>
														
													);
				const profileLink = (	
																				 <Link className="nav-link btn navbar-brand btn-nav LoginLink" to ="/profile">Profile</Link>
													
														
														)
				
				
				
            return (
							
							 <div id="navbar" className="cardS">
                        <div className="card-block">
                              
                               
                                  <nav  className={this.state.scrolled ? 'navbar navbarS navbar-expand-lg navbar-dark bg-dark scrolled' : 'navbar navbarS navbar-expand-lg navbar-dark bg-dark'}>
																		<div className="row">
																			
																			
																		<div className="col-2">
																				<button className="navbar-toggler btn-nav" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
																				<span className="navbar-toggler-icon"></span>
																				</button>
																		</div>
																	
																		
																			<div className="col-6 PauseTcont"><span className="PauseTnav"><img className="navImg" src={pause}></img></span></div>
																			
																			
																		<div className="col-4 MobProfile">
																			<ul className="navbar-nav">
																		<li className="nav-item">
																			<div className="">
																				{auth ? profileLink : loginLink }
																			</div>
																				
																			</li>
																			</ul>
																		</div>
																		</div>
																		
																		
																		
                                    <div className="collapse navbar-collapse row" id="navbarNavDropdown"> 
																			
																			<div className="col-sm-1 col-md-1"></div>
																			
																				<div className="col-sm-10 col-md-10">
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
																				 <Link className="nav-link btn navbar-brand btn-nav" to="/contact">Contact Us</Link></li>
                                     <li className="nav-item">
																				 <Link className="nav-link btn navbar-brand btn-nav" to ="/register">Register</Link>
																				 </li>
																				
																				<li className="nav-item login-Profile">
																			<div className="login-Profile">
																					{auth ? profileLink : loginLink }
																				</div>
																				
																				</li>
																			
																			</ul>	
																			</div>
                                      
																				<div className="col-sm-1 col-md-1"></div>
                                    
                                    
                                    </div>
                                  
                                   </nav>
                               
                        </div>
                  
            
                  </div>
								
                 
            
            );
				
				
      }
	
	
		
      
}
export default NavBar;
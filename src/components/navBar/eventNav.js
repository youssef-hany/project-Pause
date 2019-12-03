import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './eventNav.css';
import Pause1 from "../img/Pause1.jpg";


class EventNav extends Component {
      
      render(){
            return (
           <nav className="navbar nav navbar-expand-lg navbar-dark bg-dark">
								
								<a title="Anchoring Home" className="navbar-brand " href="/"><span><img src={Pause1} className="img-fluid pauseImg" alt="Pause Round Logo"></img></span></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="nav collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
											<Link className="btn btn-dark navbar-dark col-sm-12" to="/">Home<span className="sr-only">(current)</span></Link>
                     
                    </li>

                    <li className="nav-item">
                        <Link className="btn btn-dark navbar-dark col-sm-12" to="/about">About Us</Link>
                    </li>
									  <li className="nav-item">
                        <Link className="btn btn-dark navbar-dark col-sm-12" to="/shop">Pause Shop</Link>
                    </li>
										<li className="nav-item">
                        <Link className="btn btn-dark navbar-dark col-sm-12" to="/register">Registration</Link>
                    </li>
                    <li className="nav-item dropdown">
                        
											<a className="nav-link dropdown-toggle contact" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Contact Us</a>
                        <div className="dropdown-menu menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item drop-item" href="#">Phone</a>
                            <a className="dropdown-item drop-item" href="#">Facebook</a>
                            <a className="dropdown-item drop-item" href="#">Twitter</a>
                        </div>
                    </li>
                </ul>
            </div>
							
            
        </nav>
            
            );
      }
      
}
export default EventNav;
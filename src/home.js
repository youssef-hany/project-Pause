import React, { Component } from 'react';
import logo from './logo.svg';
import PauseLabel from './components/img/PauseLabel.png';
import PauseName from './components/img/PauseName.png';
import arrow from './components/img/arrowDown4.png';
import './home.css';

//components
import NavBar from './components/navBar/navBar';
import MainCarousel from './components/carousel/carousel';
import Sections from './components/sections/sections';
import JoinModal from './components/modals/joinModal';
import {handleScroll} from '../src/components/tools/scrollToDiv.js';
import {executeScroll, reference} from '../src/components/tools/scroll2.js';
import VideoModals from './components/modals/VideoModals';
import Footer from './components/footer/footer';


import AwesomeDebouncePromise from 'awesome-debounce-promise';


//services
import HttpService from './components/tools/services/http-service'

const http = new HttpService();
//tools
var Scrolled = false;


class Home extends Component {
	
	constructor(props){
    	super(props);
			this.loadData = this.loadData.bind(this);
		
			this.loadData();
			this.state = {
				scrolled: false
			};
  }

	
	
	
	Listener = window.addEventListener('scroll', () => {
		

		
	const scrolled = window.scrollY;   
		
   try{	
		if (scrolled > 100 && !Scrolled){
    if("a"){
				Scrolled = true;
				
			 }
	}
		 
	 }
		catch(e){
	console.log('Scroll Error',e)
}
		
		
   });



	
	loadData= () => {
			http.getRegisters().then(registers => {
				console.log(registers)	
			}, err => {
					
			});
	}
  
	
  render(){


		
        return (
    <div className="Home">
    
        <header  className="App-header">
        <div className="container">
					<div className="row imgTop">
					<div className="col-sm-12 PauseLogo ">
					
						<img src={PauseLabel} className="App-logo img-fluid" alt="logo" />
        	</div>
						<div className="col-sm-12">
						<img src={PauseName} className="appName img-fluid" alt="logo" />
							   <div className="col-sm-12 ">
                    <button className="arrowBtn"><a onClick={executeScroll} className="arrowDown arrowimg"><img src={arrow} className="img-fluid arrowimg">
                      </img>
                      
                     </a>
									 </button>
      
              
              </div>
						</div>
							</div>
					</div>
	      
      </header>
            
      
      
          
      <div ref = {reference} className="container-fluid  App-main">
							   
				<div className="cont">
				<NavBar />
					
				</div>

                  <div className="container">    
                   
                      <MainCarousel /> 
                 	</div>
         <React.Fragment>
         
           <Sections />
           <JoinModal />
           <VideoModals />
           <Footer />
        </React.Fragment>
          <script src="../src/components/tools/scrollToDiv.js"></script>

      </div> 
    </div>
  );
  

	}
        
}
export default Home;
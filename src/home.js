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
import Announcement from './components/announcement/announcement';
import Footer from './components/footer/footer';
import AwesomeDebouncePromise from 'awesome-debounce-promise';


//services
import {isAuthenticated} from './account/authenticated'
import HttpService from './components/tools/services/http-service'

const http = new HttpService();
const token = localStorage.getItem('usertoken');

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

	
	componentDidMount(){
		window.addEventListener('scroll', () => {
		

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
		
	
	}
	

	
	loadData= () => {
			http.getRegisters().then(registers => {
				console.log(registers)	
			}, err => {
					
			});
	}
  
	
  render(){

			const auth = isAuthenticated(token); 

		
        return (
    <div className="Home">
    	
        <header  className="App-header">
        	<h1 className="head-Seo">Pause Club Bue</h1>
					<p className="head-Seo">This is a website for Pause Club in the British University in Egypt</p>
					<div className="container-fluid">
					<div className="row imgTop">
					<div className="col-sm-12 PauseLogo ">
					
						<img src={PauseLabel} className="App-logo img-fluid" alt="Pause Logo Spinning" />
        	</div>
						<div className="col-sm-12">
						<img src={PauseName} className="appName img-fluid" alt="Pause Name" />
							   <div onMouseOver={executeScroll} id = "arrowimg" className="col-sm-12">
                    <button className="arrowBtn"><a title="Anchor to drag the page down" className="arrowDown arrowimg"><div className="arrow"></div>
                      
                     </a>
									 </button>
      
              
              </div>
						</div>
							</div>
					</div>
	      
      </header>
            
      
      
          
      <div ref = {reference} className="App-main">
							   
				<div className="cont">
				<NavBar />
					
				</div>

                  <div className="container">    
                   
                      <MainCarousel /> 
												
                 	</div>
				
         <React.Fragment>
					 {auth ? <Announcement /> : <div></div>}
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
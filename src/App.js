import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import Home from './home';
import Events from './events';
import Register from './register';
import pict from './components/img/PauseIMG.png';
import EventNav from './components/navBar/eventNav';
import HttpService from './components/tools/services/http-service'
const http = new HttpService();


class App extends Component {
		
		constructor(props){
				
			super(props);	
			this.state = {events:[]};
	
				//bind functions
			this.eventList = this.eventList.bind(this);
			this.loadData = this.loadData.bind(this);
			this.loadData();
				

		}
		loadData= () => {
		var self = this;	
		http.getEvents().then(data => {
				self.setState({events: data})
				
				
			}, err => {
					
			});
	} 

  	eventList = () => {
				const list = this.state.events.map((event) => 
						<div className = "col-sm-4" key={event._id}>
									
							<Events name={event.EventName} type={event.EventType} number={event.EventNumber} Coorp={event.Coorp} location={event.Location} vidUrl={event.VidUrl}  imgUrl={event.ImgUrl} />

																						
						</div>
																					 
				);
																					 	
				return (list);
		}
		
		
		render(){
				

			
			
			return(
				<div className="App">
					
						
					<Route exact path="/" component={ Home } />
					<Route exact path="/register" component={ Register } />
					      

							
					<div className="event-route-wrap">
							<Route exact path="/events"  render={() =>
										<div className="sectionDark innerWrap ">
											<div className="evNav">
													<EventNav/>
												</div>
											
										<div className="container">
												<div className="row">

														{this.eventList()}

												</div>		
										</div>			
										</div>
							
							} />
					</div>
					
					
				
							
						
							
				</div>
			 		
			);
			

        
}
}
export default App;
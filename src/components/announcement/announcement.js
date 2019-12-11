import React, { Component } from 'react';
import HttpService from '../tools/services/http-service';
import './announcement.css'
const http = new HttpService();


class Announcement extends Component{
	
	constructor(props){
		super(props);
		this.state = {announcement: []};
		
		this.loadAnnouncement = this.loadAnnouncement.bind(this);
		this.announcementData = this.announcementData.bind(this);
		this.loadAnnouncement();
	}
	
	
	loadAnnouncement = () => {
		var self = this;
		http.getAnnouncement().then(data => {
			self.setState(
				{announcement: data})
		}, err => {
			console.log("could not get Announcement")
			
		})
		
	}
	announcementData = () => {
				
				return(
				<div className = "card jumbotron announcementMain" key={this.state.announcement._id}>
							<h4 className="card-title dashboard">DASHBOARD</h4>		
							<label>{this.state.announcement.title}</label>
							<textarea className="md-textarea form-control"  defaultValue={this.state.announcement.message} readOnly></textarea>

																						
						</div>
												
				)
															 
				
																					 	
			
		}
	
	
	
	
	render(){
		
		
			return(
		
							<div>{this.announcementData()}</div>															
																						
				);
		
			
	
		
		
		
	}
	
	
}

export default Announcement;
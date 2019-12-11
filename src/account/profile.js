import React, { Component } from 'react';
import jwt from 'jsonwebtoken';
import './profile.css';
import { announcement } from './functions';
import Announcement from '../components/announcement/announcement';

const secret = 'secret';

class Profile extends Component {

	
	
	constructor(){
		super();
	
		this.state = {
			user: {},
			error: {},
			title: '',
			message: ''
			
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	onChange(e){
		this.setState({ [e.target.name]: e.target.value });	
	}
	
	onSubmit(e){
		e.preventDefault();
		
		const userData = {
			email: this.state.user.email,
			title: this.state.title,
			message: this.state.message,
			privilige: this.state.user.privG
		}
		console.log(userData);
		announcement(userData).then(res => {
		
			this.props.history.push('/');

		}).catch(err =>{
			console.log('error: ' + err)
		})
	
	}
	onRemove(e){
		
		
	}
	

	componentDidMount(){
		
		
		
		const jwtTkn = localStorage.getItem("usertoken");
		const token = localStorage.usertoken;
		
		if (token){
			const decoded = jwt.verify(token, secret);
			
		this.setState({
			user: decoded,
			error: {}
		})
			
		}else{
			this.props.history.push('/login');
		}
			

		
	}
	
	
	
	
	render(){
	
		const BPriv = this.state.user.privG;
		if(this.state.user === undefined){
		return(
			<div><h1>Loading...</h1><hr /><h6><i>if this screen persists please contact admin</i></h6></div>
				
				);
			}
	
		const announceBtn = (	
			
			
		<div className="container-fluid">
				<div className="row">
				<div className="col-sm-12 md-form announce-wrap">
			

					
				<label className="announcementFont" htmlFor='title'>Title</label>
					
					<div  className="announcementTitleInput" >
					<input type="text" value={this.state.email} onChange={this.onChange} id="title" name="title" placeholder="Title.." className="form-control announce-input1 announcementFont">
				</input>
					</div>
					
				<hr />
			<label className="announcementFont" htmlFor='message'>Announcement</label>
					<textarea type="text" value={this.state.email} onChange={this.onChange} id="message" name="message" placeholder="Dear Pause, . . ." className="md-textarea form-control announce-input announcementFont">
				</textarea>
				<hr/>
					<button className="btn btn-light announcementFont">Announce</button>
			</div>
				</div>
				
				<hr />
				<div className="row">
						<div className="col-sm-12"><Announcement /></div>
				</div>
		
			</div>
			
					
													);
		
		
	
		return(
			<div className="container">
		<div className="jumbotron mt-5">
			<div className="col-sm-8 mx-auto">
			<h1 className="text-center">PROFILE</h1>
			</div>
			<table className="table col-md-6 mx-auto">
				<tbody>
					<tr>
						<td>Name</td>
						<td>{this.state.user.name}</td>
					</tr>
						<tr>
						<td> ID </td>
						<td> {this.state.user.id}</td>
					</tr>
						<tr>
						<td>User Name</td>
						<td>{this.state.user.userName} </td>
					</tr>
						<tr>
						<td>Phone</td>
						<td> {this.state.user.phone} </td>
					</tr>
						<tr>
						<td>Email</td>
						<td> {this.state.user.email} </td>
					</tr>
						<tr>
						<td>Password</td>
						<td> {this.state.user.password} </td>
					</tr>
						<tr>
						<td>Faculty</td>
						<td> {this.state.user.faculty} </td>
					</tr>
						<tr>
						<td>Year</td>
						<td> {this.state.user.year} </td>
					</tr>
						<tr>
						<td>Department</td>
						<td> {this.state.user.department} </td>
					</tr>
					<tr>
						<td>privileges</td>
						<td> {this.state.user.privT} </td>
						<td> {this.state.user.privG} </td>
					</tr>
									</tbody>
			
			
			</table>
			
			</div>
					
					<div>
						<form  noValidate onSubmit={this.onSubmit}>
				<div className="container form-group">
					
					{this.state.user.privT==='member' ? announceBtn  : <div></div> }
					</div>
			</form>
					</div>
						
					

		</div>
					);
		
		
		
		
	}
	
	
	
}


export default Profile;




import React, { Component } from 'react';
import jwt from 'jsonwebtoken';
const secret = 'secret';
class Profile extends Component {

	constructor(){
		super();
		this.state = {
			name: '',
			id: '',
			userName: '',
			phone: '',
			email:'',
			password: '',	
			faculty: '',
			major: '',
			year: '',
			department: '',
			error: {}
		};

	}

	
	componentDidMount(){
		const token = localStorage.usertoken;
		const decoded = jwt.verify(token, secret);
		console.log(decoded);
		this.setState({
			name: decoded.name,
			id: decoded.id,
			userName: decoded.userName,
			phone: decoded.phone,
			email: decoded.email,
			password: decoded.password,	
			faculty: decoded.faculty,
			major: decoded.major,
			year: decoded.year,
			department: decoded.department
		})
		
	}
	render(){
		
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
						<td>{this.state.name}</td>
					</tr>
						<tr>
						<td> ID </td>
						<td> {this.state.id}</td>
					</tr>
						<tr>
						<td>User Name</td>
						<td>{this.state.userName} </td>
					</tr>
						<tr>
						<td>Phone</td>
						<td> {this.state.phone} </td>
					</tr>
						<tr>
						<td>Email</td>
						<td> {this.state.email} </td>
					</tr>
						<tr>
						<td>Password</td>
						<td> {this.state.password} </td>
					</tr>
						<tr>
						<td>Faculty</td>
						<td> {this.state.faculty} </td>
					</tr>
						<tr>
						<td>Year</td>
						<td> {this.state.year} </td>
					</tr>
						<tr>
						<td>Department</td>
						<td> {this.state.department} </td>
					</tr>
						
				</tbody>
			
			
			</table>
			
			</div>
		</div>
					);
		
		
		
		
	}
	
	
	
}


export default Profile;




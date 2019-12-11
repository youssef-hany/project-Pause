import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import EventNav from '../components/navBar/eventNav';
import { login } from './functions';

class Login extends Component{
	constructor(){
		super();
		this.state = {
			email: '',
			password: '',
			errors: {}
		};
	
	this.onChange = this.onChange.bind(this);
	this.onSubmit = this.onSubmit.bind(this);

	}
	onChange(e){
		this.setState({ [e.target.name]: e.target.value });
	}

		onSubmit(e){
		e.preventDefault();
	
const user = {
	email :this.state.email,
	password : this.state.password
};

 login(user).then(res => {
	 if(res){
		 this.props.history.push('/profile')
	 }
 }).catch(err =>{
	 console.log(err);
	 this.props.history.push('/')
 })
		
}
	
	

render(){
	return(
		<div className="sectionRegisterLogin">
				<EventNav/>
		<div className="container">
			<div className="row">
				<div className="col-md-6 mt-5 mx-auto">
					<form noValidate onSubmit={this.onSubmit} >
						<div className="form-group">
							<label htmlFor="email">Email address</label>
							<input name="email" value={this.state.email} onChange={this.onChange} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"></input>
							<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
						</div>
						<div className="form-group">
							<label htmlFor="password">Password</label>
							<input name="password" value={this.state.password} onChange={this.onChange} type="password" className="form-control" id="password" placeholder="Password"></input>
								</div>
						<div className="form-group form-check">
							<input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
							<label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
						</div>
						<button type="submit" className="btn btn-primary">Submit</button>
						
					</form>
					<Link to="/register">Create New Account</Link>
					
				</div>

			</div>
		</div>
		</div>
		
		
	);
}

}

export default Login;
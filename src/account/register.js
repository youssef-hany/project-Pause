import React, { Component } from 'react';
import './register.css';
import { register } from './functions';

class Register extends Component {
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
		
	this.onChange = this.onChange.bind(this);
	this.onSubmit = this.onSubmit.bind(this);
	}
	
	onChange(e){
		this.setState({ [e.target.name]: e.target.value });
		
	}
	
	onSubmit(e){
		e.preventDefault();
		
		const newUser = {
			name: this.state.name,
			id: this.state.id,
			userName: this.state.userName,
			phone: this.state.phone,
			email: this.state.email,
			password: this.state.password ,	
			faculty: this.state.faculty,
			major: this.state.major,
			year: this.state.year,
			department: this.state.department
		}
		register(newUser).then(res => {
			this.props.history.push('/login')
		});
	}
		
	
	
	
	render() {
		return ( 
		<div className="container registerContainer">
			<div className="row">
				<div className="col-md-6 mt-5 mx-auto">
					<form noValidate onSubmit={this.onSubmit} >
						<div className="form-group">
							<label htmlFor="name">Name</label>
							<input name="name" value={this.state.name} onChange={this.onChange} type="text" className="form-control name" id="name" placeholder="What's your name?"></input>
						</div>
						<div className="form-group">
							<label htmlFor="id">ID Number</label>
							<input name="id" value={this.state.id} onChange={this.onChange} type="number" className="form-control id" id="id" placeholder="123456.."></input>
						</div>
						<div className="form-group">
							<label htmlFor="userName">User Name</label>
							<input name="userName" value={this.state.userName} onChange={this.onChange} type="text" className="form-control userName" id="userName" placeholder="User Name"></input>
						</div>
						<div className="form-group">
							<label htmlFor="phone">Phone</label>
							<input name="phone" value={this.state.phone} onChange={this.onChange} type="number" className="form-control phone" id="phone" placeholder="We need to contact you.."></input>
						</div>
				
						<div className="form-group">
							<label htmlFor="email">Email address</label>
							<input name="email" value={this.state.email} onChange={this.onChange} type="email" className="form-control email" id="email" placeholder="example@bue.edu.eg"></input>
							<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
						</div>
						<div className="form-group">
							<label htmlFor="password">Password</label>
							<input name="password" value={this.state.password} onChange={this.onChange} type="password" className="form-control password" id="password" placeholder="Password"></input>
						</div>
						
						<div className="form-group">
							<label htmlFor="faculty">Faculty</label>
							<input className="form-group faculty" name="faculty" value={this.state.faculty} onChange={this.onChange}  list="faculty"></input>

							<datalist  id="faculty">
									<option>Business Administration</option>
									<option>Engineering</option>
									<option>Computer Science</option>
									<option>Mass Communication</option>
									<option>Dentistry</option>
									<option>Pharmacy</option>
								</datalist>
							
						</div>
						<div className="form-group">
							<label htmlFor="major">Major</label>
							<input name="major" value={this.state.major} onChange={this.onChange} type="text" className="form-control major" id="major" placeholder=""></input>
						</div>
						<div className="form-group">
							<label htmlFor="year">Year After Prep</label>
							<input name="year" value={this.state.year} onChange={this.onChange} type="number" className="form-control year" id="year" ></input>
						</div>
						<div className="form-group">
							<label htmlFor="department">Field of Interest</label>
							<input name="department" value={this.state.department} onChange={this.onChange} type="text" className="form-control department" id="department" placeholder="Field of Interest"></input>
						</div>
						<div className="form-group form-check">
							<input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
							<label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
						</div>
						<button type="submit" className="btn btn-primary">Submit</button>
					</form>
					
					
				</div>

			</div>
		</div>
		
		);


	}





}
export default Register;

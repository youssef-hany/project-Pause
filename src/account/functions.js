import axios from 'axios';
import jwt from 'jsonwebtoken';

const secret = 'secret';

export const register = newUser => {
	return axios.post('http://localhost:3004/users/register',{
			name: newUser.name,
			id: newUser.id,
			userName: newUser.userName,
			phone: newUser.phone,
			email: newUser.email,
			password: newUser.password ,	
			faculty: newUser.faculty,
			major: newUser.major,
			year: newUser.year,
			department: newUser.department,
	}).then(response => {
		console.log('Registered ' + newUser.email);
	});
	
};

export const login = user => {
	return axios.post('http://localhost:3004/users/login', {
		email: user.email,
		password: user.password
	}).then(response => {
		localStorage.setItem('usertoken', response.data);
		return response.data;
		
	}).catch(err => {
		console.log(err);
	});

	
};

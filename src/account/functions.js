import axios from 'axios';


export const register = (newUser) => {
	return axios.post('http://localhost:3004/users/register',{
			user:
						{
							name: newUser.user.name,
							id: newUser.user.id,
							userName: newUser.user.userName,
							phone: newUser.user.phone,
							email: newUser.user.email,
							password: newUser.user.password ,	
							faculty: newUser.user.faculty,
							major: newUser.user.major,
							year: newUser.user.year,
							department: newUser.user.department,
						}
	}).then(response => {
		
	});
	
};

export const announcement = (userData) => {
	return axios.post('http://localhost:3004/users/profile/announce', {
	 	email: userData.email,
		title: userData.title,
		message: userData.message,
		privilige: userData.priviliges
		
	})
	
}

export const login = (user) => {
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

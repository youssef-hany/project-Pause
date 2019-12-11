import 'whatwg-fetch';

class HttpService {
	getRegisters = () => {

		var regPromise = new Promise((resolve, reject) => {


			fetch('http://localhost:3004/reports').then(response => {

				resolve(response.json());


			});



		})
		return regPromise;


	}
	
	getEvents = () => {

		var evPromise = new Promise((resolve, reject) => {


			fetch('http://localhost:3004/events').then(response => {

				resolve(response.json());


			});



		})
		return evPromise;


	}
	
	
	getAnnouncement = () =>{
		var anPromise = new Promise((resolve, reject) => {
			
				fetch('http://localhost:3004/users/announcement').then(response => {
				resolve(response.json());
			})
			
		
		});
		
		return anPromise;
		
	}
}
export default HttpService;

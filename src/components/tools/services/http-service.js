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
}
export default HttpService;

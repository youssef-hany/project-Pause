import React, { Component } from 'react';
import jwt from 'jsonwebtoken';

const secret = 'secret';



export const isAuthenticated = (token) =>{
			var auth= false;
			var current_time = Date.now() / 1000;
			var decode = jwt.decode(token, secret);
			try{
				var exp = decode.date;
				if ( exp < current_time) {
					auth = false;
					
					
			}
			else if(exp > current_time){
					auth = true;
					
			 }

			}catch(e){

				auth = false;
		

				console.log("No Auth")
			}
		return(auth);
	};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/*
const headers = new HttpHeaders()
    	.set("Content-Type", "application/json");
//   	.set("Accept", "application/json")
//   	.set("Authorization", "jwt encripted token");
*/
@Injectable()
export class AuthorizationService {

	constructor(private http: HttpClient) { }
	
	url = 'https://jsonplaceholder.typicode.com/';


	getData() {
		console.log('entered getData')

	  	return this
	          	.http
	          	.get(`${this.url}/todos/30`)
	          	.subscribe(res => console.log('Done'));

	          	
    		   //	this.http.post("${this.url}/todos/30");
	}

}


AuthorizationService.getData();
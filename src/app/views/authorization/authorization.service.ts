import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthorizationService {

	constructor(private http: HttpClient) { }
	
	url = 'https://jsonplaceholder.typicode.com/todos/1';

/*	const headers = new HttpHeaders()
            .set("X-CustomHeader", "custom header value");
            .set("X-CustomHeader", "custom header value");
            .set("X-CustomHeader", "custom header value");
*/
	getCharacters() {
	  	return this
	          .http
	          .get(`${this.url}/todos/30`);
	}

}
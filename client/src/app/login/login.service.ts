import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { isUndefined } from 'util';

@Injectable()
export class LoginService {
	private token: string;

	constructor(private http: HttpClient) {

	}

	public login(username: string, password: string): Observable<void> {
		return this.http.post('/auth/login', {username: username, password: password}, {responseType: 'text'}).pipe(map((token: string) => {
			this.token = token;
			return;
		}));
	}

	public isLoggedIn(): boolean {
		return !isUndefined(this.token);
	}
}

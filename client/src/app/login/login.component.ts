import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: 'login.component.html',
	styleUrls: ['login.component.scss']
})
export class LoginComponent {
	public username: string;
	public password: string;

	constructor(private loginService: LoginService,
	            private router: Router) {

	}

	login(): void {
		this.loginService.login(this.username, this.password).subscribe(() => {
			this.router.navigate(['home']);
		});
	}
}

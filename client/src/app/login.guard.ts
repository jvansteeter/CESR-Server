import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './login/login.service';

@Injectable()
export class LoginGuard implements CanActivate {
	constructor(private loginService: LoginService, private router: Router) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		if (this.loginService.isLoggedIn()) {
			return true;
		}

		this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } }).then(() => false);
	}
}

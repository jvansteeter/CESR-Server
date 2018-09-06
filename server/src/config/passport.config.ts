import * as passport from 'passport';
import { Strategy } from 'passport-local';
import { Users } from './users';

/***********************************************************************************************************************
 * PASSPORT CONFIG
 * Configures the passport authentication module
 **********************************************************************************************************************/


passport.serializeUser((user: any, next) => {
	next(null, user);
});

passport.deserializeUser((id: string, next) => {
	next(null, Users[id])
});

passport.use('local', new Strategy((username, password, next: Function) => {
	if (Users[username] === password) {
		next(null, Users[username]);
	}
	else {
		next(null, false);
	}
}));
import { Router, Request, Response } from 'express';
import * as passport from 'passport';


/**********************************************************************************************************
 * AUTHORIZATION ROUTER
 * /auth
 * Responsible for all authentication and authorization based calls
 *********************************************************************************************************/
export class LoginRouter {
	router: Router;

	constructor() {
		this.router = Router();
		this.init();
	}

	init() {
		this.router.post('/login', passport.authenticate('local'), async (req: Request, res: Response) => {
			try {
				res.send('OK')
			}
			catch (error) {
				res.status(500).send(error);
			}
		});
	}

}

export default new LoginRouter().router;
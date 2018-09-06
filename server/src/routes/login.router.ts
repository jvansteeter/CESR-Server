import { Router, Request, Response } from 'express';
import { Users } from '../config/users';


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
		this.router.post('/login', async (req: Request, res: Response) => {
			try {
				if (Users[req.body.username] === req.body.password) {
					res.send('OK')
				}
				else {
					res.status(401).send();
				}
			}
			catch (error) {
				res.status(500).send(error);
			}
		});
	}

}

export default new LoginRouter().router;
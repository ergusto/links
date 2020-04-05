import passport from 'passport';
import jwt from 'jsonwebtoken';
import { secret } from '../../config/secret.js';

export default function(req, res, next) {
	passport.authenticate('login', async (err, user, info) => {
		try {
			if (err) {
				return next(err);
			}

			if (!user) {
				const error = new Error('User not found');
				return next(error);
			}

			req.login(user, { session: false }, async error => {
				if (error) {
					return next(error);
				}

				const body = { id: user.id, username: user.username };

				const token = jwt.sign({ user: body }, secret);

				return res.json({ token, user: user.toJSON() });
			});
		} catch(error) {
			return next(error);
		}
	})(req, res, next);
}

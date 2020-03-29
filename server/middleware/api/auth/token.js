import { Router } from 'express';
import passport from 'passport';
import { required, optional } from '../../protections';

const router = Router();

router.post('/token', function(req, res, next) {
	const { username, password } = req.body.user;

	if (!username) {
		return res.status(422).json({ errors: { username: "can't be blank" } });
	}

	if (!password){
		return res.status(422).json({ errors: { password: "can't be blank" } });
	}

	const middleware = passport.authenticate('local', { session: false }, function(err, user, info) {
		if (err) {
			return next(err);
		}

		if (user) {
			return res.json(user.toAuthJSON());
		} else {
			return res.status(422).json(info);
		}
	});
	
	middleware(req, res, next);
});

module.exports = router;

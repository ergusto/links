import { Router } from 'express';
import { required, optional } from '../../protections';

const router = Router();

router.post('/token', function(req, res, next) {
	const { email, password } = req.body.user;

	if (!email) {
		return res.status(422).json({ errors: { email: "can't be blank" } });
	}

	if(!password){
		return res.status(422).json({ errors: { password: "can't be blank" } });
	}

	const middleware = passport.authenticate('local', { session: false }, function(err, user, info) {
		if (err) {
			return next(err);
		}

		if (user) {
			user.token = user.generateJWT();
			return res.json({
				user: user.toAuthJSON()
			});
		} else {
			return res.status(422).json(info);
		}
	});
	
	middleware(req, res, next);
});

module.exports = router;

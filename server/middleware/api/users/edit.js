import mongoose from 'mongoose';
import { Router } from 'express';
import { authRequired } from '../../protections'; 

const User = mongoose.model('User');

const router = Router();

router.use(authRequired);

router.post('/', async function(req, res, next) {
	if (!req.user) {
		return res.sendStatus(401);
	}

	const { username, email, password } = req.body;

	if (username && username.length) {
		user.username = username;
	}

	if (email && email.length) {
		user.email = email;
	}
	
	if (password && password.length) {
		user.setPassword(password);
	}

	user.save().then(function() {
		return res.json({ user: user.toAuthJSON() });
	}).catch(next);
});

module.exports = router;

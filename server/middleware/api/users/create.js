import mongoose from 'mongoose';
import { Router } from 'express';
import { authProhibited } from '../../protections'; 

const User = mongoose.model('User');

const router = Router();

router.use(authProhibited);

router.post('/', function(req, res, next) {
	const { username, email, password } = req.body;

	const user = new User();

	user.username = username;
	user.email = email;
	user.setPassword(password);

	user.save().then(function() {
		return res.json({ user: user.toAuthJSON() });
	}).catch(next);
});

module.exports = router;

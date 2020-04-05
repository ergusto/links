export default async function(req, res, next) {
	const user = {};

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
}

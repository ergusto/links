import { createUser } from '../../lib/user.js';

export default async function(req, res, next) {
	const { username, email, password } = req.body;

	try {
		const user = await createUser({ username, email, password });

		res.json({ user });
	} catch(error) {
		res.status(500).json({ error });
	}
}

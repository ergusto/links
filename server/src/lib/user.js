import db from '../models';

const { User } = db;

export const getUser = async options => {
	return await User.findOne({
		where: options
	});
};

export const createUser = async ({ username, email, password }) => {
	return await User.create({ username, email, password });
};

User.findAll().then(async users => {
	if(!users.length) {
		try {
			const user = await createUser({ username: "ergusto", email: "fergus.ruston@gmail.com", password: "3vap0rat3" });
		} catch(error) {
			console.log('error',error);
		}
	} else {
	}
});

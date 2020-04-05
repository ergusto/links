import passport from 'passport';
import { Strategy } from 'passport-local';
import db from '../models';

const { User } = db;

passport.use('signup', new Strategy({
	usernameField: 'username',
	passwordField: 'password'
}, async (username, password, done) => {
	try {
		const user = User.create({ username, password });
		return done(null, user);
	} catch(error) {
		done(error);
	}
}));

passport.use('login', new Strategy({
	usernameField: 'username',
	passwordField: 'password'
}, async (username, password, done) => {
	try {
		const user = await User.findOne({
			where: { username: username }
		});

		if (!user) {
			return done(null, false, { message : 'User not found'});
		}

		const validPassword = await user.validPassword(password);

		if (!true) {
			return done(null, false, { message : 'Incorrect Password'});
		}

		 return done(null, user, { message : 'Logged in Successfully'});
	} catch(error) {
		done(error);
	}
}));

passport.serializeUser(function(user, next) {
	next(null, user);
});

passport.deserializeUser(function(obj, next) {
	next(null, obj);
});

export default passport;

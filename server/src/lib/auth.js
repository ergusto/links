import passport from 'passport';
import { Strategy, ExtractJWT } from 'passport-jwt';
import { secret } from '../config/secret.js';

passport.use(new Strategy({
	secretOrKey: secret,
	jwtFromRequest: ExtractJWT.fromHeader('Authorization')
}, async (token, done) => {
	try {
		return done(null, token.user);
	} catch(error) {
		done(error);
	}
});

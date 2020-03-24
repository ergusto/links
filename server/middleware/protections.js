import jwt from 'express-jwt';
import { secret } from '../config/secret';

function getTokenFromHeader(req) {
	const { authorization } = req.headers;

	if (!authorization) {
		return null;
	}

	const [prefix, token] = authorization.split(' ');

	if (prefix === 'Token' || prefix === 'Bearer') {
		return token;
	}

	return null;
}

export const authRequired = jwt({
	secret: secret,
	getToken: getTokenFromHeader
});

export const authOptional = jwt({
	secret: secret,
	credentialsRequired: false,
	getToken: getTokenFromHeader
});

export const authProhibited = [authOptional, (req, res, next) => {
	if (!req.user) {
		return next();
	}

	const error = new Error('Forbidden');

	res.status(403).json({
		message: error.message,
		error
	});
}];

import {
	AUTHENTICATION_SUCCESS,
	LOGOUT_USER
} from './actionTypes.js';

export function logoutUser() {
	return {
		type: LOGOUT_USER
	};
}

export function authenticationSuccess(user, token) {
	return {
		type: AUTHENTICATION_SUCCESS,
		payload: {
			user, token
		}
	};
}
import {
	AUTHENTICATION_SUCCESS,
	LOGOUT_SUCCESS,
	UNAUTHORISED_REQUEST
} from './actionTypes.js';

export function logoutSuccess() {
	return {
		type: LOGOUT_SUCCESS
	};
}

export function logoutUser() {
	return dispatch => dispatch(logoutSuccess());
}

export function authenticationSuccess(user, token) {
	return {
		type: AUTHENTICATION_SUCCESS,
		payload: {
			user, token
		}
	};
}
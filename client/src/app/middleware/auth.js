import { push } from 'react-router-redux';
import { LOGIN_SUCCESS } from '../modules/login';
import { REGISTRATION_SUCCESS } from '../modules/registration';
import { UNAUTHORISED, LOGOUT_SUCCESS, setToken, setUser, removeUser } from '../modules/auth';

export default store => next => action => {
	const { type, payload } = action;

	if (type === LOGIN_SUCCESS || type === REGISTRATION_SUCCESS) {
		const { user, token } = payload.response;
		setUser(user);
		setToken(token);
	}

	if (type === UNAUTHORISED || type === LOGOUT_SUCCESS) {
		removeUser();
		store.dispatch(push('/'));
	}

	return next(action);
};

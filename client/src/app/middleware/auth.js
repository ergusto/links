import { push } from 'connected-react-router';
import { LOGIN_SUCCESS } from '../modules/login';
import { REGISTRATION_SUCCESS } from '../modules/register';
import { UNAUTHORISED, LOGOUT_USER, setToken, setUser, logout } from '../modules/auth';

export default store => next => action => {
	const { type, payload } = action;

	if (type === LOGIN_SUCCESS || type === REGISTRATION_SUCCESS) {
		const { user, token } = payload.response;
		setUser(user);
		setToken(token);
	}

	if (type === UNAUTHORISED || type === LOGOUT_USER) {
		logout();
		store.dispatch(push('/'));
	}

	return next(action);
};

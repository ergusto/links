import { Storage } from '../../lib/index.js';

const storage = new Storage('auth');
export const getToken = () => storage.get('token');
export const setToken = token => storage.update({ token });
export const getUser = () => {
	if (isAuthenticated()) {
		return {
			username: getUsername(),
			email: getEmail(),
		};
	} else {
		return false;
	}
};
export const setUser = ({ username, email}) => storage.update({ username, email });
export const getUsername = () => storage.get('username');
export const getEmail = () => storage.get('email');
export const removeUser = () => storage.remove('token username email');
export const isAuthenticated = () => !!getToken();

export function logout(cb) {
	removeUser();
	cb && cb();
}
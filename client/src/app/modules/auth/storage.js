import request from 'superagent';
import { Storage, api, getCookie, getBaseHeaders } from 'lib';

const storage = new Storage('auth');
export const getToken = () => storage.get('token');
export const setToken = token => storage.update({ token });
export const getUser = () => {
	const id = getId();
	if (id) {
		return {
			id: id,
			email: getEmail(),
		};
	} else {
		return false;
	}
};
export const setUser = ({ id, email}) => storage.update({ id, email });
export const getId = () => storage.get('id');
export const getEmail = () => storage.get('email');
export const removeUser = () => storage.remove('token id email');
export const isAuthenticated = () => !!getId();

export function logout(cb) {
	removeUser();
	cb && cb();
}
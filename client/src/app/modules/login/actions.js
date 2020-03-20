import {
	LOGIN_REQUEST,
	LOGIN_FAILURE,
	LOGIN_SUCCESS
} from './actionTypes.js';

import { CALL_API, METHOD_POST } from 'app/middleware/api.js';

export const loginUser = (email, password) => ({
	[CALL_API]: {
		types: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE],
		endpoint: '/api/token/',
		method: METHOD_POST,
		body: { email, password }
	}
});
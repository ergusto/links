import {
	REGISTRATION_REQUEST,
	REGISTRATION_FAILURE,
	REGISTRATION_SUCCESS
} from './actionTypes.js';

import { CALL_API, METHOD_POST } from 'app/middleware/api.js';

export const registerUser = (email, password) => ({
	[CALL_API]: {
		types: [REGISTRATION_REQUEST, REGISTRATION_SUCCESS, REGISTRATION_FAILURE],
		endpoint: '/api/register/',
		method: METHOD_POST,
		body: { email, password }
	}
});

import {
	REGISTRATION_REQUEST,
	REGISTRATION_FAILURE,
	REGISTRATION_SUCCESS
} from './actionTypes.js';
import urls from '../../lib/urls.js';

import { CALL_API, METHOD_POST } from '../../middleware/api.js';

export const registerUser = ({ username, email, password }) => ({
	type: CALL_API,
	payload: {
		types: [REGISTRATION_REQUEST, REGISTRATION_SUCCESS, REGISTRATION_FAILURE],
		endpoint: urls.register,
		method: METHOD_POST,
		body: { username, email, password }
	}
});

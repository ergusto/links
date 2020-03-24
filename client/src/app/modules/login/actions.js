import {
	LOGIN_REQUEST,
	LOGIN_FAILURE,
	LOGIN_SUCCESS
} from './actionTypes.js';
import urls from '../../lib/urls.js';

import { CALL_API, METHOD_POST } from '../../middleware/api.js';

export const loginUser = ({ username, password }) => ({
	type: CALL_API,
	payload: {
		types: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE],
		endpoint: urls.token,
		method: METHOD_POST,
		body: { user: { username, password } }
	}
});
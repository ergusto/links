import { createReducer } from 'lib';
import {
	REGISTRATION_REQUEST,
	REGISTRATION_FAILURE,
	REGISTRATION_SUCCESS
} from './actionTypes.js';

const initialState = {
	loading: false,
	error: null,
	errors: {},
	statusText: null
};

export default createReducer(initialState, {
	[REGISTRATION_REQUEST]: (state, payload) => {
		return Object.assign({}, state, {
			loading: true,
			error: null,
			errors: {},
			statusText: null
		});
	},
	[REGISTRATION_SUCCESS]: (state, payload) => {
		return Object.assign({}, state, {
			loading: false,
			error: null,
			errors: {},
			statusText: 'You have been successfully logged in.'
		});
	},
	[REGISTRATION_FAILURE]: (state, payload) => {
		return Object.assign({}, state, {
			loading: false,
			error: payload.error,
			errors: payload.errors,
			statusText: 'Authentication Error.'
		});
	},
});
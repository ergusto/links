import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
	UNAUTHORISED = 'UNAUTHORISED';

const createRootReducer = history => (state, action) => {
	if (action.type === LOGOUT_SUCCESS || action.type === UNAUTHORISED) {
		state = undefined;
	}
	
	const appReducer = combineReducers({
		router: connectRouter(history),
	});

	return appReducer(state, action);
};

export default createRootReducer;

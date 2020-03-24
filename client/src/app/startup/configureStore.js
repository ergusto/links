import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware as createRouterMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { createLogger } from 'redux-logger';

import apiMiddleware from '../middleware/api.js';
import authMiddleware from '../middleware/auth.js';
import createRootReducer from './rootReducer.js';

export const history = createBrowserHistory();

const getMiddleware = routerMiddleware => {
	if (process.env.NODE_ENV === 'production') {
		return applyMiddleware(thunkMiddleware, apiMiddleware, authMiddleware, routerMiddleware);
	} else {
		return applyMiddleware(thunkMiddleware, apiMiddleware, authMiddleware, routerMiddleware, createLogger())
	}
};

export default function configureStore() {
	const routerMiddleware = createRouterMiddleware(history),
		rootReducer = createRootReducer(history),
		middleware = getMiddleware(routerMiddleware);

	return createStore(
		rootReducer,
		middleware
	);
}

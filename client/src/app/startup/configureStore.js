import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware as createRouterMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { createLogger } from 'redux-logger';

import createRootReducer from './rootReducer.js';

export const history = createBrowserHistory();

const getMiddleware = routerMiddleware => {
	if (process.env.NODE_ENV === 'production') {
		return applyMiddleware(thunkMiddleware, routerMiddleware);
	} else {
		return applyMiddleware(thunkMiddleware, routerMiddleware, createLogger())
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

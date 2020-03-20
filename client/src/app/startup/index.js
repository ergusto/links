import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import Routes from './routes.jsx';

import './styles.js';

export default function() {
	const store = configureStore();

	return (
		<Provider store={store}>
			<Routes />
		</Provider>
	);
}

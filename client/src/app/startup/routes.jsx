import React from 'react';
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router';
import { history } from './configureStore.js';

import { LoginRoute } from '../modules/login';
import { LogoutRoute } from '../modules/auth';
import { RegistrationRoute } from '../modules/registration';

export default function() {
	return (
		<ConnectedRouter history={history}>
			<>
				<Switch>
					<Route exact path="/" render={() => (<h1>Hi there</h1>)} />
				</Switch>
			</>
		</ConnectedRouter>
	);
}

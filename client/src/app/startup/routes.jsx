import React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './configureStore.js';

import AuthSwitchRoute from '../components/authSwitchRoute.jsx';
import NotFoundRoute from '../components/not-found.jsx';
import AuthRoute from '../components/authRoute.jsx';
import UnauthRoute from '../components/unauthRoute.jsx';

import { HomeRoute } from '../modules/home';
import { Layout } from '../modules/layout';
import { LogoutRoute } from '../modules/auth';
import { LandingRoute } from '../modules/landing';
import { LoginRoute } from '../modules/login';
import { RegsiterRoute } from '../modules/register';

export default function() {
	return (
		<ConnectedRouter history={history}>
			<Layout>
				<Switch>
					<AuthSwitchRoute exact path="/" AuthComponent={HomeRoute} UnauthComponent={LandingRoute} />

					<UnauthRoute exact path="/login" component={LoginRoute} />
					<UnauthRoute exact path="/register" component={RegsiterRoute} />

					<AuthRoute exact path="/logout" component={LogoutRoute} />
					
					<Route path='*' component={NotFoundRoute} />
				</Switch>
			</Layout>
		</ConnectedRouter>
	);
}

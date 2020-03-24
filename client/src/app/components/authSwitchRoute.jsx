import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router';

export default function({ AuthComponent, UnauthComponent, ...rest }) {
	const { authenticated } = useSelector(data => data.auth);

	const Component = authenticated ? AuthComponent : UnauthComponent;

	return (
		<Route {...rest}>
			<Component />	
		</Route>
	);
}

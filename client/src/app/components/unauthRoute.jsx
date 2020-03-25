import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function(props) {
	const { authenticated } = useSelector(data => data.auth);

	if (authenticated) {
		return <Redirect to='/' />;
	}

	return <Route {...props} />;
}

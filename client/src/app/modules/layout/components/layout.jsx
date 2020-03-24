import React from 'react';
import { useSelector } from 'react-redux';
import AuthLayout from './auth.jsx';
import UnauthLayout from './unauth.jsx';

export default function({ children }) {
	const { authenticated } = useSelector(data => data.auth);

	const Layout = authenticated ? AuthLayout : UnauthLayout;
	
	return (
		<Layout>
			{children}
		</Layout>
	);
}

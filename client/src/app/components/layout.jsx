import React from 'react';
import { useSelector } from 'react-redux';

import { HeaderUnauthComponent } from '../modules/header.unauth';
import { HeaderAuthComponent } from '../modules/header.auth';

export default function({ children }) {
	const { authenticated } = useSelector(data => data.auth);
	
	const HeaderComponent = authenticated ? HeaderAuthComponent : HeaderUnauthComponent;

	return (
		<div>
			<HeaderComponent />
			{children}
		</div>
	)
}

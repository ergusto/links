import React, { useEffect } from 'react';
import { HeaderUnauthComponent } from '../../header.unauth';

import '../css/unauth-layout.scss';

const backgroundTheme = 'background-theme-unauth';

export default function({ children }) {
	useEffect(() => {
		document.body.classList.add(backgroundTheme);
		console.log('lol');

		return () => {
			document.body.classList.remove(backgroundTheme);
		};
	});

	return (
		<div className='unauth-layout'>
			<HeaderUnauthComponent />
			{children}
		</div>
	);
}

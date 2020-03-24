import React, { useEffect } from 'react';
import { HeaderAuthComponent } from '../../header.auth';

import '../css/auth-layout.scss';

const bodyClass = 'background-color-page';

export default function({ children }) {

	useEffect(() =>{
		document.body.classList.add(bodyClass);
		
		return () => {
			document.body.classList.remove(bodyClass);
		};
	});

	return (
		<div className='auth-layout'>
			<HeaderAuthComponent />
			{children}
		</div>
	);
}

import React from 'react';
import { Link } from 'react-router-dom';

export default function() {
	return (
		<header className='border-bottom'>
			<div className='float-left'>
				<h1>Links</h1>
			</div>

			<div className='float-right inline-block margin-left'>
				<Link to='/'>Home</Link>
				<Link to='/logout'>Logout</Link>
			</div>
		</header>
	);
}

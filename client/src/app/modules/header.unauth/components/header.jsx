import React from 'react';
import { Link } from 'react-router-dom';

const linkClasses = 'color-white no-underline inline-block';

export default function() {
	return (
		<header className='color-white width-100 clearfix padding-all font-family-raleway'>
			<div className='float-left inline-block margin-left'>
				<Link to='/' className='no-underline'>
					<h1 className='margin-all-0 line-height-site-title color-white font-size-large font-weight-regular'>Links</h1>
				</Link>
			</div>

			<div className='float-right inline-block margin-left'>
				<Link to='/' className='color-white no-underline inline-block margin-right'>Home</Link>
				<Link to='/login' className='color-white no-underline inline-block margin-right'>
					<button className='button button--white-ghost button--medium button--shift-on-hover line-height-site-title font-weight-medium'>Login</button>
				</Link>
				<Link to='/register' className='color-white no-underline inline-block margin-right'>
					<button className='button button--purple-main button--medium button--shift-on-hover line-height-site-title font-weight-medium'>Register</button>
				</Link>
			</div>
		</header>
	);
}

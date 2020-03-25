import React from 'react';
import { Link } from 'react-router-dom';

const linkClasses = 'color-white no-underline inline-block margin-right line-height-header font-weight-medium';

export default function() {
	return (
		<header className='color-white width-100 clearfix padding-all font-family-raleway'>
			<div className='float-left inline-block margin-left'>
				<Link to='/' className='no-underline'>
					<h1 className='margin-all-0 line-height-header color-white font-weight-regular'>Links</h1>
				</Link>
			</div>

			<div className='float-right inline-block margin-left'>
				<Link to='/' className={linkClasses}>Home</Link>
				<Link to='/login' className={linkClasses}>
					<button className='button button--purple-main button--medium button--shift-on-hover'>Login</button>
				</Link>
				<Link to='/register' className={linkClasses}>
					<button className='button button--white-ghost button--medium button--shift-on-hover'>Register</button>
				</Link>
			</div>
		</header>
	);
}

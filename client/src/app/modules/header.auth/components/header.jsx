import React from 'react';
import { Link } from 'react-router-dom';

const linkClasses = 'color-white no-underline inline-block margin-right line-height-header font-weight-medium';

export default function() {
	return (
		<header className='width-100 padding-all border-bottom border-color-blue-grey clearfix font-family-raleway'>
			<div className='float-left inline-block margin-left'>
				<Link to='/' className='no-underline'>
					<h1 className='margin-all-0 line-height-header font-weight-regular color-charcoal'>Links</h1>
				</Link>
			</div>

			<div className='float-right inline-block margin-left'>
				<Link to='/logout' className={linkClasses}>
					<button className='button button--purple-main button--medium button--shift-on-hover'>Logout</button>
				</Link>
			</div>
		</header>
	);
}

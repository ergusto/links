import React from 'react';
import { Link } from 'react-router-dom';
import { Manager, Reference, Popper } from 'react-popper';
import Dropdown from '../../../components/dropdown/dropdown.jsx';
import './header.scss';


const linkClasses = 'color-white no-underline inline-block margin-right line-height-site-title font-weight-medium';

function AddLink() {
	return (
		<Dropdown trigger={(ref, toggle) => (
			<button ref={ref} onClick={toggle} type="button" className='button button--purple-main button--medium button--shift-on-hover margin-right font-weight-medium'>
				Add Link
			</button>
		)} content={
			<div className='add-link-dropdown background-color-white padding-all border-all box-shadow border-color-blue-grey border-radius-all'>
				<h1>hi</h1>
			</div>
		} />
	);
}

export default function() {
	return (
		<div className='background-color-white'>
			<header className='width-100 padding-all border-bottom border-color-blue-grey clearfix font-family-raleway box-shadow'>
				<div className='float-left inline-block margin-left'>
					<Link to='/' className='no-underline'>
						<h1 className='margin-all-0 line-height-site-title font-size-large font-weight-regular color-charcoal'>Links</h1>
					</Link>
				</div>

				<div className='float-right inline-block margin-left'>
					<AddLink />
					<Link to='/logout' className='color-white no-underline inline-block margin-right line-height-site-title font-weight-medium'>
						<button className='button button--purple-main button--medium button--shift-on-hover'>Logout</button>
					</Link>
				</div>
			</header>
		</div>
	);
}

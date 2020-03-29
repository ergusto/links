import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { registerUser } from '../actions.js';

function RegisterUser() {
	const { register, handleSubmit } = useForm();
	const dispatch = useDispatch();

	const onSubmit = data => dispatch(registerUser(data));

	return (
		<div className='w-90 mw-6'>
			<form onSubmit={handleSubmit(onSubmit)} className='white-form bg-spaceship-white faint-blue bsh bra pa3 mh3 tmd-mh5 mb3' noValidate>
				<h3 className='align-center mb2 fs5'>Register</h3>
				<input name='username' ref={register} placeholder='username' />
				<input name='email' type='email' ref={register} placeholder='email' />
				<input name='password' type='password' ref={register} placeholder='password' />
				<button type='submit' className='btn btn--blue btn--block fs6 mt2'>Register</button>
			</form>
		</div>
	);
}

export default function() {
	const isOpenReg = false;

	if (isOpenReg) {
		return <RegisterUser />;
	} else {
		return (
			<div className='max-width-6 centered padding-top-4 text-align-center'>
				<h1 className='color-white font-weight-thin'>Registration is closed</h1>
			</div>
		);
	}
}

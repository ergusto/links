import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { loginUser } from '../actions.js';

const inputClass = 'form-field margin-bottom';

export default function LoginUser() {
	const { register, handleSubmit, errors } = useForm();
	const dispatch = useDispatch();

	const onSubmit = data => dispatch(loginUser(data));

	return (
		<div className='max-width-7 centered padding-top-4'>
			<form onSubmit={handleSubmit(onSubmit)} className='max-width-3 centered' noValidate>
				<header className='padding-top padding-bottom-2'>
					<h2 className='text-align-center font-weight-thin color-white'>Login</h2>
				</header>
				<div>
					<input name='username' ref={register} placeholder='username' className={inputClass} />
					<input name='password' type='password' ref={register} placeholder='password' className={inputClass} />
					<button type='submit' className='button button--white-ghost button--medium button--shift-on-hover bold'>Login</button>
				</div>
			</form>
		</div>
	);
}
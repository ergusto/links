import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../actions.js';

export default function LogoutComponent() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(logoutUser());
	});

	return null;
}
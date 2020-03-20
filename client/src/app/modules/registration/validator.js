import { createValidator } from 'modules/form';

export default createValidator({
	email: value => {
		if (!value) {
			return 'This field is required';
		}
	},
	password: value => {
		if (!value) {
			return 'This field is required';
		}

		if (value.length < 8) {
			return 'Password must be 8 characters or more';
		}
	},
	repeat_password: value => {
		if (!value) {
			return 'This field is required';
		}

		if (value.length < 8) {
			return 'Password must be 8 characters or more';
		}
	},
});
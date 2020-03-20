import mongoose from 'mongoose';
import crypto from 'crypto';
import uniqueValidator from 'mongoose-unique-validator';

import { secret } from '../../config/secret.js';

const userSchema = mongoose.Schema({
	username: {
		type: String,
		lowercase: true,
		unique: true,
		required: [true, "can't be blank"],
		match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
		index: true
	},
	email: {
		type: String,
		lowercase: true,
		unique: true,
		required: [true, "can't be blank"],
		match: [/\S+@\S+\.\S+/, 'is invalid'],
		index: true
	},
	hash: String,
	salt: String
}, {
	timestamps: true
});

userSchema.plugin(uniqueValidator, {
	message: 'is already taken.'
});

userSchema.methods.validPassword = function(password) {
	const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
	return this.hash === hash;
};

userSchema.methods.setPassword = function(password) {
	this.salt = crypto.randomBytes(16).toString('hex');
	this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

userSchema.methods.generateJWT = function() {
	const today = new Date(),
		exp = new Date(today);

	exp.setDate(today.getDate() + 60);

	return jwt.sign({
		id: this._id,
		username: this.username,
		exp: parseInt(exp.getTime() / 1000),
	}, secret);
};

userSchema.methods.toAuthJSON = function() {
	return {
		user: {
			username: this.username,
			email: this.email,
		},
		token: this.generateJWT()
	};
};

mongoose.model('User', userSchema);

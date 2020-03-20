import mongoose, { Schema } from 'mongoose';

const linkSchema = new Schema({
	title: String,
	url: String,
	text: String
});

mongoose.model('Link', linkSchema);

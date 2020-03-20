import mongoose from 'mongoose';

export function startDatabase(url) {
	mongoose.connect(url, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	});
}

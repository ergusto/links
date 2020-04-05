export default function(req, res, next) {
	res.json({
		message : 'Signup successful',
		user : req.user
	});
}

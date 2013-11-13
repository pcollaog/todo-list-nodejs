exports.ensureAuthenticated = function ensureAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {
		console.log("User successfuly authorized");
		return next();
	}
	console.log("User must be logged");
	res.redirect('/login')
};
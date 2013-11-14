/*
 * GET home page.
 */
exports.index = function(req, res) {
	console.log("User " +req.user);
	res.render('todos', {
		user: req.user
	});
};
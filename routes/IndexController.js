/*
 * GET home page.
 */
exports.index = function(req, res) {
	res.render('todos', {
		user: req.user
	});
};
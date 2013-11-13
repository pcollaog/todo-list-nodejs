var User = require('../model/UserModel');

exports.index = function(req, res) {
	res.render('register', {});
}

exports.registerUser = function(req, res) {
	User.register(new User({
		username: req.body.username
	}), req.body.password, function(err, user) {
		if (err) {
			return res.render('register', {
				user: user
			});
		}

		res.redirect('/');
	});
}
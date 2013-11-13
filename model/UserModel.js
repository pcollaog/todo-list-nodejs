var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	username: {
		type: String
	},
	name: {
		type: String
	},
	gravatar: {
		type: String
	},
	email: {
		type: String
	},
	provider: {
		type: String
	},
	salt: {
		type: String
	},
	hashed_password: {
		type: String
	}
});

UserSchema.methods.validPassword = function(password) {
	console.log("password" + password);
	return true;
};

var UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
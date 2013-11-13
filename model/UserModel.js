var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new mongoose.Schema({});

UserSchema.plugin(passportLocalMongoose);

var UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
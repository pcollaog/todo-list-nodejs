var mongoose = require('mongoose');
var mongoDatabaseURI = 'mongodb://localhost/todolist';

mongoose.connect(mongoDatabaseURI);

mongoose.connection.on('connected', function() {
	console.log('Mongoose default connection open to ' + mongoDatabaseURI);
});

mongoose.connection.on('error', function(err) {
	console.log('Mongoose default connection error: ' + err);
});

mongoose.connection.on('disconnected', function() {
	console.log('Mongoose default connection disconnected');
});

// TODO: load all model files from directory model.
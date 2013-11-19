var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
	text: String,
	date: {
		type: Date,
		default: Date.now
	},
	done: {
		type: Boolean,
		default: false
	},
	creator: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}
});

var TodoModel = mongoose.model('Todo', TodoSchema);

module.exports = TodoModel;
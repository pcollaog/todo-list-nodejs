var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todolist');

var TodoSchema = new mongoose.Schema({
	text: String,
	date: {
		type: Date,
		default: Date.now
	},
	done: {
		type: Boolean,
		default: false
	}
});

var TodoModel = mongoose.model('Todo', TodoSchema);

module.exports = {
	TodoModel: TodoModel
}
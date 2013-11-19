var Todo = require('../model/TodosModel');

/**
 * Find all todos by userId
 * @param  {Object} req request
 * @param  {Object} res response
 */
function findAllTodosByUser(req, res) {
	var userId = req.user.id;

	Todo.find()
		.where('creator')
		.equals(userId)
		.sort('date')
		.exec(function(err, todos) {
			if (err) {
				res.send(err);
			}
			res.json(todos);
		});
}


exports.allTodos = findAllTodosByUser;

exports.createTodo = function(req, res) {
	var userId = req.user.id;
	var textTodo = req.body.text;

	Todo.create({
		text: textTodo,
		done: false,
		creator: userId
	}, function(error, todo) {
		if (error) {
			res.send(error);
		}
		findAllTodosByUser(req, res);
	});
}


exports.deleteTodo = function(req, res) {
	Todo.remove({
		_id: req.params.todo_id
	}, function(error, todo) {
		if (error) {
			res.send(error);
		}
		findAllTodosByUser(req, res);
	});
}
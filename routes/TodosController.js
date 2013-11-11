var Todo = require('../model/TodosModel');

/*
 * GET home page.
 */
exports.allTodos = function(req, res) {

	Todo.find(function(error, todos) {
		if (error) {
			res.send(error);
		}

		res.json(todos);
	});
}

exports.createTodo = function(req, res) {

	Todo.create({
		text: req.body.text,
		done: false
	}, function(error, todo) {
		if (error) {
			res.send(error);
		}

		Todo.find(function(error, todos) {
			if (error) {
				res.send(errors);
			}
			res.json(todos);
		});
	});
}

exports.deleteTodo = function(req, res) {
	Todo.remove({
		_id: req.params.todo_id
	}, function(error, todo) {
		if (error) {
			res.send(error);
		}

		Todo.find(function(error, todos) {
			if (error) {
				res.send(error);
			}

			res.json(todos);
		});
	});
}
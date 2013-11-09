/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todolist');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(require('less-middleware')({
	src: path.join(__dirname, 'public')
}));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}

http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});


app.get('/', function(req, res){
	res.sendfile('./public/index.html');
});

var Todo = mongoose.model('Todo', {
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

app.get('/api/todos', function(req, res) {

	Todo.find(function(error, todos) {
		if (error) {
			res.send(error);
		}

		res.json(todos);
	});
});

app.post('/api/todos', function(req, res) {

	Todo.create({
		text: req.body.text,
		done: false
	}, function(error, todos) {
		if (error) {
			res.send(error);
		}

		Todo.find(function(error, todos) {
			if (error) {
				res.send(errors);
			}
		})

		res.json(todos);
	});

});

app.delete('/api/todos/:todo_id', function(req, res) {
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
});
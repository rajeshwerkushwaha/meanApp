var express 		= require('express'),
    app 			= express(),
    bodyParser 		= require('body-parser'),
    mongoose 		= require('mongoose');
    todoController 	= require('./server/controllers/todo-controller.js');

mongoose.connect('mongodb://localhost:27017/test');

app.get('/', function(req, res){
    res.sendfile(__dirname + '/client/views/index.html');
});

app.use(bodyParser());

app.use('/js', express.static(__dirname + '/client/js'));

app.post('/api/tasks', todoController.addTask);
app.get('/api/tasks', todoController.list);

app.listen(3000, function(){
    console.log('Server is ready to listen...');
});
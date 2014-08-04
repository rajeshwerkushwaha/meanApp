var Task = require('../models/task.js');

module.exports.addTask = function(req, res){
    var task = new Task(req.body);
    task.save(function(err, result){
        res.json(result);
    });
};

module.exports.list = function(req, res){
  Task.find({}, function(err, results){
      res.json(results);
  })  
};

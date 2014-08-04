app.controller('todoController', ['$scope', '$resource', 
   	function($scope, $resource){
        var Task = $resource('/api/tasks');
        Task.query(function(result){
            $scope.todoList = result;
        });
    	$scope.todoList = [];
    	$scope.addTask = function(){
        	/*
            $scope.todoList.push({name:$scope.taskName});
        	$scope.taskName = '';
            */
            var task = new Task();
            task.name = $scope.taskName;
            task.$save(function(result){
                $scope.todoList.push(result);
                $scope.taskName = '';
            });
    	}
}]);
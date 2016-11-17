myApp.factory('userFactory', ['$http', function($http){
var factory = {}
factory.getusers = function(callback){
  $http.get('/').then(function(returned_data){
    callback(returned_data.data)
  })
}

factory.adduser = function(user, callback){
  $http.post('/create', user).then(function(returned_data){
    callback(returned_data.data);
  })
}

factory.loginuser = function(user, callback){
  $http.post('/login', user).then(function(returned_data){
    callback(returned_data.data);
  })
}

factory.home = function(callback){
  $http.get('/home').then(function(data){
    callback(data.data);
  })
}

factory.addmessage = function(message, callback){
  $http.post('/addmessage', message).then(function(returned_data){
    // users[returned_data.data.user_id].message += data.message;
    callback(returned_data.data);
    console.log(returned_data.data);
  })
}
factory.getMessages = function(callback){
  $http.get('/messages').then(function(returned_data){
    callback(returned_data.data);
  })
}

factory.addComment = function(comment, messageId, callback){
  $http.post('/message/'+messageId+'/comments', comment).then(function(returned_data){
    callback(returned_data.data);
  })
}

return factory;
}]);

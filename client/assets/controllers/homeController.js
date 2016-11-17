myApp.controller('homeController', ['userFactory', '$location', homeController]);

function homeController(userFactory, $location){
  var _this = this;
  function setusers(data){
    _this.users = data;
    _this.user = {};
  }
  // this.users = {};
  // this.user = {};

  userFactory.getusers(setusers);

  userFactory.home( function(user){
    _this.user = user;
  });


  }

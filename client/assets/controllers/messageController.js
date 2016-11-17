myApp.controller('messageController', ['userFactory', '$location', messageController]);

function messageController(userFactory, $location){
  var _this = this;
  // function setusers(data){
  //   _this.users = data;
  //   _this.user = {};
  // }

  // userFactory.getusers();
  function getMessages(){
    userFactory.getMessages(function(data){
      _this.messages=data;
    })
  }
  getMessages();

  this.addmessage = function(){
    userFactory.addmessage(this.message, function(data) {
      if(data.hasOwnProperty('errors')){
        _this.messageErrors = data.errors;
        console.log(data.errors);
      } else {
          getMessages();
        }
    })
  };
  this.addComment = function(messageId){
    userFactory.addComment(this.comment[messageId], messageId, function(data){
      if(data.hasOwnProperty('errors')){
        _this.commentErrors = data.errors;
        console.log(data.errors);
      } else {
          getMessages();
      }
    })
  }

};

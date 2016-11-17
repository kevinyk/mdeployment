var path = require('path');
var users = require('../controllers/users.js');
var messages = require('../controllers/messages.js');
var comments = require('../controllers/comments.js');

function loginAuthentication(req,res,next){
  if (req.session.userId){
    next();
  }else{
    res.status(401).send("User not found");
  }
}

module.exports = function(app){
  app.get('/', users.index);
  app.post('/create', users.create);
  app.post('/login', users.login);
  app.use(loginAuthentication);
  app.get('/home', users.home);
  app.post('/addmessage', messages.addmessage);
  app.get('/messages', messages.index);
  app.post('/message/:id/comments', comments.create);
};

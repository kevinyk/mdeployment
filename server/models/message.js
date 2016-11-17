
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new mongoose.Schema({
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
 message: { type: String, required: true},
 comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});

mongoose.model('Message', messageSchema);

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var commentSchema = new Schema({
	email:{type:String,required:true},
	content:{type:String,required:true},
	created:{type:Date}
});
mongoose.model('Comment',commentSchema);
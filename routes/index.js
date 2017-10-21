var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
require('../models/user.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/login',(req,res,next)=>{
	let userInfo = null;
    var User = mongoose.model('User');
	User.findOne(function(error,user){
		userInfo = user;
		res.send({
		status:1,
		data:userInfo
	    });
	});

});

module.exports = router;

const express = require('express');
const xss = require('xss');
const router = express.Router();
/* 数据请求API */
router.get('/',(req,res,next)=>{
   res.send('hello world');
});
router.post('/message' , (req,res,next)=>{
 let email = xss(req.body.emailAddress);
 let message = xss(req.body.messageContent);
 // 检验数据是否为空
 if(email==''||message==''){
   res.send({
 	status:0,
 	data:'fail'
 });
 }else{
 	 res.send({
	 	status:1,
	 	data:'success'
	 });
 }

});

module.exports = router;
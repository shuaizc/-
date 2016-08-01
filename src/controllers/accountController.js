'use strict'

const mongoose = require('mongoose');
let usermodel = mongoose.model('user');

//1.0 
exports.getloginpage = (req,res)=>{

	res.render('login.html',{title:'用户登录'},(err,content)=>{
		if(err)
		{
			console.log(err);
			res.end(err.toString());
			return;
		}
		res.end(content);
	});
}
//2.0 
exports.postlogin = (req,res)=>{}
//3.0
exports.getregisterpage = (req,res)=>{

	res.render('register.html',{title:'用户注册'},(err,content)=>{
		if(err)
		{
			console.log(err);
			res.end(err.toString());
			return;
		}
		res.end(content);
	});
}
//4.0 
exports.postregister = (req,res)=>{

	//1.0 获取到浏览器请求过来的数据  (body-parser)
	let uname = req.body.uname;
	let upwd =req.body.upwd;
	let uqq =req.body.uqq;
	let uemail =req.body.uemail

	//2.0 检查数据的合法性
	console.log(uname,upwd,uqq,uemail);
	
	//3.0 将数据插入到数据库中
	usermodel.create({
		uname:uname,
		upwd:upwd,
		uqq:uqq,
		uemail:uemail
	},(err)=>{

		//响应给浏览器用户已经注册成功
		res.setHeader('Content-Type','text/html;charset=utf8');
		res.end('<script>alert("用户注册成功");window.location="/account/login"</script>');
	});

}
//5.0
exports.logout = (req,res)=>{}

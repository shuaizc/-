//作用是开启web服务器

'use strict'

// 这是从环境变量中去获取一个PORT的变量值，如果没有则默认给6000端口
let PORT = process.env.PORT || 9090;

const express = require('express');
const xtpl = require('xtpl');
const path = require('path');
const mongoose  = require('mongoose');
mongoose.connect('mongodb://localhost/CZ04');

let app = express();


//使用第三方中间件body-parse
const bodyparser = require('body-parser');
app.use(bodyparser());

app.use(express.static(path.join(__dirname,'statics')));

app.set('views',path.join(__dirname,'views')); 
app.set('view engine','html');
app.engine('html',xtpl.renderFile);

//加载数据库的模型
require('./models/userModel.js');

//使用routes文件夹中的路由js文件
app.use('/account',require('./routes/accountRouter.js'));

app.listen(PORT,()=>{

	console.log('环境启动'+ PORT);
});


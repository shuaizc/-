//作用是开启web服务器

'use strict'

// 这是从环境变量中去获取一个PORT的变量值，如果没有则默认给6000端口
let PORT = process.env.PORT || 6000;

const express = require('express');

let app = express();


app.listen(PORT,()=>{

	console.log('环境启动'+ PORT);
});


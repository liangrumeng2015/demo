var express = require('express');
var app = express();

// 引入Controller里面的路由
var allCl = require('./Controller/index.js');
allCl.init(app);

app.listen(3000, function(){
    console.log('server is open');
});

// 全局安装一个 supervisor   #  npm install supervisor -g
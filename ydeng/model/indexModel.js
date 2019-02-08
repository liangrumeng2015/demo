//请求模块
var request = require('request');
var cheerio = require('cheerio');
// 爬虫

var indexModel = {
    getData:function(fn){    //向外暴露了init
        request('https://www.baidu.com/', function(error,response,body){
            // if(error && response.statusCode === 200){
                const $ = cheerio.load(body);
                console.log($('#su').val());
                fn($('#su').val());
            // }
        })
    }
}
// indexModel.prototype.getDate = function(){}


module.exports = indexModel;


/**
 * 安装 request   # npm install request --save
 * 安装 cheerio   # npm install cheerio --save
 */
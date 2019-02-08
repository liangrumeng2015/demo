var indexModel = require('../model/indexModel.js');

var initCal = {
    init:function init(app){   // 将init在外面暴露
        app.get('/a/b',function(req,res){
            res.json({
                username:'zhangsan',
                age:18
            })
        });
        app.get('/',function(req,res){
            indexModel.getData(function(val){
                res.send(val);
            });
            // res.send('hello b');
        });
    }
}
module.exports = initCal;
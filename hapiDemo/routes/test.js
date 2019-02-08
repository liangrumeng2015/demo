const path = require('path');

const test = {
    method:'GET',
    path:'/test',
    handler:(request,h)=>{
        return h.file(path.join(__dirname,'../public/hello.html'));
    }
}
module.exports = [test];

/**await server.register(require('inert'));
 * 安装inert   # npm install --save inert
 * 
 * forbidden权限：403
 * （1）可能是路径问题，尝试着改为 绝对路径：
 * path(__dirname,'../public/hello.html')
 * 
 * 
 */
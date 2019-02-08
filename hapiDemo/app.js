'use strict';

const Hapi=require('hapi');
const routes = require('./routes/index.js');

// Create a server with a host and port
const server=Hapi.server({
    host:'localhost',
    port:8000
});


// Start the server
const start =  async function() {

    // 注册插件：await server.register(require('inert'));
    await server.register(require('inert'));
    // 将路由push出去
    for(let api of routes){
        server.route(api);
    }


    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();
const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;
const socketIO = require('socket.io');

//Necesario para trabajar con socket
const http = require('http');


let server = http.createServer(app);
app.use(express.static(publicPath));
//IO= Esta es la comunicacion del backend
module.exports.io = socketIO(server);
require('./sockets/socket');



server.listen(port, (err) => {

    if (err) throw new Error(err);
    console.log(`Servidor corriendo en puerto ${ port }`);
});

module.exports = app;
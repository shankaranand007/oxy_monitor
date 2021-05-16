
var socket_io = require('socket.io');

var io       = socket_io();

var socketio = {};

socketio.io  = io;

var users = [];

 io.on('connection', function(socket){
    
    console.log('A user connected');

    socket.on('join', function (user){
        console.log("lilsdlsklsd")
       socket.username = user.username;

       users.push(socket.username);

       io.emit('user joined', { 'username': user.username, users:users });

    });

         
 });
 
module.exports = socketio;
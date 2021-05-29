
var socket_io = require('socket.io');

var io = socket_io();

var socketio = {};

socketio.io = io;

var users = [];

io.on('connection', function (socket) {

   console.log('A user connected');

   socket.on('join', function (user) {

      io.emit('user joined', { 'username': "user.username, users:users" });
      io.emit('availableStock', {});
   });

   socket.on("new connection called", (data) => {
      console.log(data, "alsdjnasjdn")
      io.emit('request connection', data)
   })

   socket.on('disconnect', function () {

      console.log('user disconnected');

      // users.splice(users.indexOf(socket.username), 1);

      io.emit('user disconnected', "");

   });

});

module.exports = socketio;
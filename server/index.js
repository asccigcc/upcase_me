/*
* Server socket io
*/

io.sockets.on('connection', function (socket) {
  //note the use of io.sockets to emit but socket.on to listen
  //io.sockets.emit('status', { status: 'Conected' });
  socket.on('reset', function (data) {
    up = data.toUpperCase();
    io.sockets.emit('status', { status: up });
  });
});

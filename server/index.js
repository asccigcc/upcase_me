/*
* Server socket io
*/

io.sockets.on('connection', function (socket) {
  //note the use of io.sockets to emit but socket.on to listen
  socket.on('room', function(room) {
    socket.join(room);
  });
  //io.sockets.emit('status', { status: 'Conected' });
  socket.on('input', function (data, room) {
    up = data.toUpperCase();
    io.sockets.in(room).emit('output', { status: up });
  });
});

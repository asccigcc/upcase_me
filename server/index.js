/*
* Server socket io
*/
var _s = require('underscore.string');

io.sockets.on('connection', function (socket) {
  //note the use of io.sockets to emit but socket.on to listen
  socket.on('room', function(room) {
    socket.join(room);
  });
  //io.sockets.emit('status', { status: 'Conected' });
  socket.on('input', function (data, room, method) {
    switch(method) {
    case 'downcase':
      up = data.toLowerCase();
      break;
    case 'capitalize':
      up = _s.capitalize(data);
      break;
    case 'swapCase':
      up = _s.swapCase(data);
      break;
    case 'reverse':
      up = _s.reverse(data);
      break;
    case 'titleize':
      up = _s.titleize(data);
      break;
    default:
        up = data.toUpperCase();
    }
    io.sockets.in(room).emit('output', { status: up });
  });
});

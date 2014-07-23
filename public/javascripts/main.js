// General functions
var rand = function() {
    return Math.random().toString(36).substr(2); // remove `0.`
};

var token = function() {
    return rand() + rand(); // to make it longer
};


// Socket io connection

var socket = io.connect(window.location.hostname);

//var room = 'axc12';
var room = token();

socket.on('connect', function() {
  socket.emit('room', room);
});

socket.on('output', function (data) {
  console.log(data.status);
  $('#output').text(data.status);
});

$('#input').on('change keyup paste', function(){
    var c = $('#input').val();
    socket.emit('input', c, room);
});


$('#reset').click(function() {
    $('#input').text('');
    $('#output').text('');
});

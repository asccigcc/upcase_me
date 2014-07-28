// General functions
var client = new ZeroClipboard($(".copy-button"));
client.on( "copy", function (event) {
  var clipboard = event.clipboardData;
  clipboard.setData( "text/plain" );  
});
var method = 'upcase';

var rand = function() {
    return Math.random().toString(36).substr(2); // remove `0.`
};

var token = function() {
    return rand() + rand(); // to make it longer
};

$( "li" ).click(function() {
    _this = $(this);
    if(!_this.hasClass('disabled')){
        _this.parent().children().removeClass('disabled');
        _this.addClass('disabled');
        method = _this.data('type');
        //console.log(method);
    }
});


// Socket io connection

var socket = io.connect(window.location.hostname);

var room = token();

socket.on('connect', function() {
  socket.emit('room', room);
});

socket.on('output', function (data) {
  //console.log(data.status);
  $('#output').text(data.status);
});

$('#input').on('change keyup paste', function(){
    var c = $('#input').val();
    socket.emit('input', c, room, method);
});


$('#reset').click(function() {
    $('#input').text('');
    $('#output').text('');
});

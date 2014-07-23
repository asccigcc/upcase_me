var socket = io.connect(window.location.hostname);

socket.on('status', function (data) {
    console.log(data.status);
    $('#output').text(data.status);
});

$('#input').on('change keyup paste', function(){
    var c = $('#input').val();
    socket.emit('reset', c);
});


$('#reset').click(function() {
    $('#input').text('');
    $('#output').text('');
});

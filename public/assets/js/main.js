import '/socket.io/socket.io.js';

var socket = io();

var form = document.querySelector('form');
var textarea = document.querySelector('textarea');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (textarea.value)
        socket.emit('chat message', textarea.value);
        textarea.value = '';
});
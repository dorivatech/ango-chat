import '/socket.io/socket.io.js';

var socket = io();

var form = document.querySelector('form');
var textarea = document.querySelector('textarea');
var messages = document.querySelector('#messages');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (textarea.value)
        socket.emit('chat message', textarea.value);
        textarea.value = '';
});

socket.on('chat message', function (msg) {
    var item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});
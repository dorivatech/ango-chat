import '/socket.io/socket.io.js';

var socket = io();

var form = document.querySelector('form');
var textarea = document.querySelector('#message');
var messages = document.querySelector('#messages');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (textarea.value)
        socket.emit('chat message', textarea.value);
        textarea.value = '';
});

socket.on('chat message', function (msg) {
    var item = document.createElement('li');
    var message = document.createElement('span');

    message.classList.add('message');
    Math.round(Math.random()) == 0 ? item.classList.add('me') : '';

    message.textContent = msg;

    item.appendChild(message);
    messages.appendChild(item);
    document.querySelector('.card-body').scrollTo(0, document.querySelector('.card-body').scrollHeight);
});
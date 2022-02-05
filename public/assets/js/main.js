import '/socket.io/socket.io.js';
import { Chat } from './Chat.js';

var socket = io();

Chat.getForm().addEventListener('submit', function(e) {
    e.preventDefault();
    let textarea = Chat.getTextarea();

    if (textarea.value)
        socket.emit('chat message', textarea.value);
        textarea.value = '';
});

Chat.getTextarea().addEventListener('input', function() {
    socket.emit('someone typing');
});

socket.on('chat message', message => Chat.newMessage(Math.round(Math.random()) == 0, message));
socket.on('connected user', data => Chat.connectedDisconnectedUserListener('connected', data));
socket.on('disconnected user', data => Chat.connectedDisconnectedUserListener('disconnected', data));
socket.on('someone typing', data => Chat.someoneTyping(data));
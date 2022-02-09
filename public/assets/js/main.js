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
    if (this.value == '')
        socket.emit('stop typing');
    else
        socket.emit('someone typing');
});

Chat.getTextarea().addEventListener('focusout', function () {
    socket.emit('stop typing');
});

socket.on('chat message', data => {
    Chat.newMessage(Chat.getUserDataFromLocalStorage().userId == data.userId, data);
    socket.emit('stop typing');
});

socket.on('connected user', data => Chat.connectedDisconnectedUserListener('connected', data));
socket.on('disconnected user', data => Chat.connectedDisconnectedUserListener('disconnected', data));
socket.on('someone typing', data => Chat.someoneTyping(data));
socket.on('stop typing', data => Chat.stopTyping(data));
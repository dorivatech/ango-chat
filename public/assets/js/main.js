import '/socket.io/socket.io.js';
import { Chat } from './Chat.js';
import { Theme } from './Theme.js';

var socket = io();

/** Inicializa o tema */

window.onload = function() {
    // Inicializa o tema
    Theme.init();

    // Aplica uma acção aos botões de mudança de tema
    document.querySelectorAll('.changeThemeButton').forEach(item => {
        item.addEventListener('click', function () {
            Theme.setTheme(this.dataset.theme);
        });
    });

    // Aplica uma acção aos botões de identificação do usuário (se o usuário vai se identificar ou não)
    document.querySelectorAll('.identificationButton').forEach(item => {
        item.addEventListener('click', function () {
            document.querySelector('.identificationButton.active').classList.remove('active');
            item.classList.add('active');

            let checkbox = document.querySelector('#identification');
            let inputName = document.querySelector('[name="name"]');

            if (item.dataset.identify == "true") {
                checkbox.checked = false;
                inputName.disabled = false;
                inputName.classList.remove('disabled');
            } else {
                checkbox.checked = true;
                inputName.disabled = true;
                inputName.classList.add('disabled');
            }

        })
    });
    
    document.querySelector('#signUpForm')?.addEventListener('submit', function(e) {
        e.preventDefault();

        let user = {
            identification: this.identification.checked,
            name: ''
        };

        if (this.identification.checked) {
            if (!this.name.value) {
                alert('Digite seu nome por favor');
                return;
            } else {
                user.name = this.name.value;
                sessionStorage.setItem('user', JSON.stringify(user));
            }
        } else
            sessionStorage.setItem('user', JSON.stringify(user));

        socket.emit('new user', user);
        location = '/chat';
    });

    socket.on('connected user', data => Chat.connectedDisconnectedUserListener('connected', data));
}


/* Chat.getForm().addEventListener('submit', function(e) {
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

socket.on('disconnected user', data => Chat.connectedDisconnectedUserListener('disconnected', data));
socket.on('someone typing', data => Chat.someoneTyping(data));
socket.on('stop typing', data => Chat.stopTyping(data)); */
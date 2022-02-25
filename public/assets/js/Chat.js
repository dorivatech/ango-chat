export const Chat = {
    formId: '#form',
    textareaId: '#message',
    messagesContainerId: '#messages',
    scrollableMessagesContainerId: '#messages-container',
    typingContainerId: '#typing-container',

    getForm: function () {
        return document.querySelector(this.formId);
    },

    getTextarea: function () {
        return document.querySelector(this.textareaId);
    },

    getMessagesContainer: function () {
        return document.querySelector(this.messagesContainerId);
    },

    getScrollableMessagesContainer: function () {
        return document.querySelector(this.scrollableMessagesContainerId);
    },

    getTypingContainer: function () {
        return document.querySelector(this.typingContainerId);
    },

    scrollMessagesContainerToTop: function () {
        this.getScrollableMessagesContainer().scrollTo(0, this.getScrollableMessagesContainer().scrollHeight);
    },

    getUserDataFromLocalStorage: function () {
        return JSON.parse(localStorage.getItem('user'));
    },

    setUserDataToLocalStorage: function (data) {
        localStorage.setItem('user', JSON.stringify(data));
    },

    newMessage: function (myself = null, data) {
        var item = document.createElement('li');
        var span = document.createElement('span');

        span.classList.add('message');
        myself ? item.classList.add('me') : '';

        span.textContent = data?.message;

        item.appendChild(span);
        this.getMessagesContainer().appendChild(item);
        this.scrollMessagesContainerToTop();
    },

    connectedDisconnectedUserListener: function (type, data = {}) {
        var item = document.createElement('li');
        var span = document.createElement('i');

        item.classList.add('text-muted');
        item.classList.add('justify-content-center');
        span.classList.add(type == 'connected' ? 'text-success' : 'text-danger');

        if (type == 'connected')
            span.textContent = `${data.identification ? data.name : 'Anônimo'} conectou-se`;
        else
            span.textContent = `${data.identification ? data.name : 'Anônimo'} desconectou-se`;

        if (type == 'connected')
            if (!this.getUserDataFromLocalStorage()?.name)
                this.setUserDataToLocalStorage(data);

        item.appendChild(span);
        this.getMessagesContainer().appendChild(item);
        this.scrollMessagesContainerToTop();
    },

    someoneTyping: function (data = {}) {
        var item = document.createElement('li');
        var span = document.createElement('i');

        item.classList.add('text-muted');
        item.classList.add('justify-content-center');
        span.classList.add('text-info');
        span.textContent = `${data.userId} está digitando...`;

        item.appendChild(span);
        this.getTypingContainer().innerHTML = item.outerHTML;
        this.scrollMessagesContainerToTop();
    },

    stopTyping: function (data = {}) {
        this.getTypingContainer().innerHTML = "";
        this.scrollMessagesContainerToTop();
    }
}
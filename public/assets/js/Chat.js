export const Chat = {
    formId: '#form',
    textareaId: '#message',
    messagesContainerId: '#messages',
    scrollableMessagesContainerId: '#messages-container',

    getForm: function() {
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

    scrollMessagesContainerToTop: function() {
        this.getScrollableMessagesContainer().scrollTo(0, this.getScrollableMessagesContainer().scrollHeight);
    },

    newMessage: function(myself = null, message) {
        var item = document.createElement('li');
        var span = document.createElement('span');

        span.classList.add('message');
        myself ? item.classList.add('me') : '';

        span.textContent = message;

        item.appendChild(span);
        this.getMessagesContainer().appendChild(item);
        this.scrollMessagesContainerToTop();
    },
    
    connectedDisconnectedUserListener: function(type, message = null) {
        var item = document.createElement('li');
        var span = document.createElement('i');
        
        item.classList.add('text-muted');
        item.classList.add('justify-content-center');
        span.classList.add(type == 'connected' ? 'text-success' : 'text-danger');
        span.textContent = message;
        
        item.appendChild(span);
        this.getMessagesContainer().appendChild(item);
        this.scrollMessagesContainerToTop();
    }
}
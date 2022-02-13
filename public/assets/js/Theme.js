/**************************************************************************
 * Theme.js
 *
 * Folha de script responsável pela funcionalidade de mudança entre temas
 **************************************************************************
 *
 * Esta é a class responsável pelos métodos de mudança entre os temas do app
 */

import { Cookie } from "./Cookie.js";

export const Theme = {
    /**
     * @class Theme
     * 
     * @property theme: o tema selecionado
     */

    theme: 'light',

    getTheme: function () {
        return this.theme;
    },

    setTheme: function (theme) {
        this.removeTheme();
        this.theme = theme;
        this.setCookieTheme();
        this.addTheme();
    },

    setCookieTheme: function (theme) {
        if (!this.getCookieTheme() || this.getCookieTheme() != this.getTheme())
            Cookie.setCookie('ango_chat_theme', this.getTheme(), 90);
    },

    getCookieTheme: function () {
        return Cookie.getCookie('ango_chat_theme');
    },

    init: function () {
        this.theme = this.getCookieTheme() || 'light';

        if (!this.getCookieTheme() || this.getCookieTheme() != this.getTheme())
            Cookie.setCookie('ango_chat_theme', this.getTheme(), 90);
            
        this.addTheme();
    },

    addTheme: function () {
        document.querySelector('body').classList.add(this.getTheme());
    },

    removeTheme: function () {
        document.querySelector('body').classList.remove(this.getTheme());
    }
};

console.log(Theme?.getCookieTheme() || 'teste');
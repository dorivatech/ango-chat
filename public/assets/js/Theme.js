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

    theme: this?.getCookieTheme() ? this?.getCookieTheme() : 'teste',

    getTheme: function () {
        return this.theme;
    },

    setTheme: function (theme) {
        this.theme = theme;
    },

    setCookieTheme: function (theme) {
        this.removeTheme();
        this.setTheme(theme);
        this.init();
        this.addTheme();
    },

    getCookieTheme: function () {
        return Cookie.getCookie('ango_chat_theme');
    },

    init: function () {
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
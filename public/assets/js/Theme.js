/**************************************************************************
 * Theme.js
 *
 * Folha de script responsável pela funcionalidade de mudança entre temas
 **************************************************************************
 *
 * Esta é a class responsável pelos métodos de mudança entre os temas do app
 */

import { LocalStorage } from "./LocalStorage.js";

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
        this.theme = theme;
    },

    setLocalStorageTheme: function (theme) {
        this.removeTheme();
        this.setTheme(theme);

        if (!this.getLocalStorageTheme() || this.getLocalStorageTheme() != this.getTheme())
            LocalStorage.setLocalStorage('ango_chat_theme', this.getTheme());
            
        this.addTheme();
    },

    getLocalStorageTheme: function () {
        return LocalStorage.getLocalStorage('ango_chat_theme');
    },

    init: function () {
        this.theme = this.getLocalStorageTheme() || 'light';

        if (!this.getLocalStorageTheme() || this.getLocalStorageTheme() != this.getTheme())
            LocalStorage.setLocalStorage('ango_chat_theme', this.getTheme());
            
        this.addTheme();
    },

    addTheme: function () {
        document.querySelector('body').classList.add(this.getTheme());
    },

    removeTheme: function () {
        document.querySelector('body').classList.remove(this.getTheme());
    }
};

console.log(Theme?.getLocalStorageTheme() || 'teste');
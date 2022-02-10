export const LocalStorage = {
    getLocalStorage(name) {
        return localStorage.getItem(name);
    },

    setLocalStorage(name, value, jsonParse = false) {
        localStorage.setItem(name, jsonParse ? JSON.parse(value) : value);
    }
};
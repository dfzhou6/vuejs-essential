const ls = localStorage;

export default {
    setItem(key, value) {
        ls.setItem(key, JSON.stringify(value))
    },
    getItem(key) {
        try {
            return JSON.parse(ls.getItem(key))
        } catch (e) {
            return null
        }
    },
    removeItem(key) {
        ls.removeItem(key)
    }
}
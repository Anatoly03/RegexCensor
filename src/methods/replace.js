import Filter from '../filter.js'
import { lat } from '../config/latinize-extend.js'

/**
 * @method check
 * @param {string} str String to replace swear
 * @returns {string} String with profanity filtered.
 */
Filter.prototype.replace = function (str) {
    const latinized = lat(str)
    const patterns = this.matchString(str)

    for (let pat of patterns) {
        pat = new RegExp(pat, 'ig')
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec
        let array
        while ((array = pat.exec(latinized)) !== null) {
            str = replaceAt(str, array.index, '*'.repeat(pat.lastIndex - array.index))
        }
    }

    return str
}

function replaceAt(str, index, replacement) {
    return str.substr(0, index) + replacement + str.substr(index + replacement.length);
}
import Filter from '../filter.js'
import { lat } from '../config/latinize-extend.js'

/**
 * @method check
 * @param {string} str String(s) to find profanity
 * @returns {RegExp[]}
 */
Filter.prototype.find = function (str) {
    if (typeof str == 'string') {
        return this.findString(str)
    } else if (Array.isArray(str)) {
        const words = []
        for (const s of str) {
            const arr = this.find(s)
            for (const a of arr) {
                words.push(arr[a])
            }
        }
        return words
    }
    throw 'Filter.find() expects string or an array of strings as parameter input.'
}

/**
 * @method check
 * @param {string} str String to proof for profanity.
 * @returns {RegExp[]}
 */
Filter.prototype.findString = function (str) {
    str = lat(str)
    const words = []

    for (let pat of this.patterns) {
        pat = new RegExp(pat, 'ig')
        const arr = str.match(pat)
        for (let w in arr) {
            words.push(arr[w])
        }
    }

    return words
}

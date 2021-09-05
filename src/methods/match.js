import Filter from '../filter.js'
import { lat } from '../config/latinize-extend.js'

/**
 * @method check
 * @param {string | string[]} str String(s) to match profanity patterns.
 * @returns {RegExp[]} Patterns that were triggered.
 */
Filter.prototype.match = function (str) {
    if (typeof str == 'string') {
        return this.matchString(str)
    } else if (Array.isArray(str)) {
        const emits = []
        for (const s of str) {
            const result = this.match(s)
            for (const p of result) {
                emits.push(p)
            }
        }
        return emits
    }
    throw 'Filter.match() expects string or an array of strings as parameter input.'
}

/**
 * @method check
 * @param {string} str String to proof for profanity
 * @returns {RegExp[]}
 */
Filter.prototype.matchString = function (str) {
    str = lat(str)
    const emits = []

    for (let pat of this.patterns) {
        pat = new RegExp(pat, 'i')
        if (pat.test(str)) emits.push(pat)
    }

    return emits
}

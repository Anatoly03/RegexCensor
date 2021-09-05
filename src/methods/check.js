import Filter from '../filter.js'
import { lat } from '../config/latinize-extend.js'

/**
 * @method check
 * @param {string | string[]} str String(s) to proof for profanity
 */
Filter.prototype.check = function (str) {
    if (typeof str == 'string') {
        return this.checkString(str)
    } else if (Array.isArray(str)) {
        for (const s of str) {
            if (this.check(s)) return true
        }
        return false
    }
    throw 'Filter.check() expects string or an array of strings as parameter input.'
}

/**
 * @method check
 * @param {string} str String(s) to proof for profanity.
 * @return {boolean} Does string match any patterns?
 */
Filter.prototype.checkString = function (str) {
    // https://www.npmjs.com/package/latinize
    str = lat(str)

    for (let pat of this.patterns) {
        pat = new RegExp(pat, 'i')
        if (pat.test(str)) return true
    }

    return false
}

import patterns from '../config/patterns.js'
import Filter from '../filter.js'

/**
 * @method addField
 * @param {string} key Field Name to add
 */
Filter.prototype.addField = function (key) {
    if (typeof key != 'string')
        throw 'Filter.addField(key) ~ key is expected to be of type string'

    for (const field of patterns) {
        if (field.name == key) {
            this.add(field.patterns)
            return
        }
    }
}

/**
 * @method add
 * @param {RegExp | RegExp[]} pat Field Name to add
 */
Filter.prototype.add = function (pat) {
    if (pat instanceof RegExp) {
        for (const pat of this.patterns) {
            if (pat.test(str)) return true
        }
        return
    } else if (Array.isArray(pat)) {
        for (const field of pat) {
            this.patterns.push(field)
        }
        return
    }
    throw 'Filter.add() expects RegExp or an array of regex patterns as parameter input.'
}

